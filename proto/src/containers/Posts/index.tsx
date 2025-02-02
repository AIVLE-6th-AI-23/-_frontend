import React, { useState } from 'react';
import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPosts, fetchPost, updatePost } from '@/services/post';
import { Post, PostRequest, Posts } from '@/types/types';
import InfiniteScrollList from '@/components/InfiniteScrollList';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PostThumbnail from '@/components/PostThumbnail';

interface PostListProps {
    boardId: number;
}

interface PostProps {
    boardId: number;
    postId: number;
}

export const PostList: React.FC<PostListProps> = ({ boardId }) => {
    const pathName = usePathname();
    const queryClient = useQueryClient();
    const [editMode, setEditMode] = useState<{ [key: number]: boolean }>({});

    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['posts', boardId],
        queryFn: ({ pageParam, type } : { pageParam ?: string | null, type ?: string | null }) => fetchPosts({ boardId, status : type, pageParam }),
        getNextPageParam: (lastPage : Posts) =>
            lastPage.length > 0 ? lastPage[lastPage.length - 1].createdAt : null,
        initialPageParam : null,
    });

    const updateMutation = useMutation({
        mutationFn: (updatedData: PostRequest & { postId: number }) =>
            updatePost({ boardId, postId: updatedData.postId, postData: updatedData }),
        onSuccess: (updatedPost, { postId }) => {
            queryClient.setQueryData(["post", boardId, postId], updatedPost);
            setEditMode((prev) => ({ ...prev, [postId]: false })); // ✅ 수정 모드 종료
        },
        onError: (error) => {
            console.error("게시글 수정 실패:", error);
        },
    });

    const handleSave = (e: React.FormEvent<HTMLFormElement>, postId: number) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const postData = {
            boardId,
            postTitle: formData.get("postTitle") as string,
            description: formData.get("description") as string,
        };
        updateMutation.mutate({ postId, ...postData });
    };

    if (status === 'pending') return <p>로딩 중...</p>;
    if (status === 'error') return <p>게시글을 불러오지 못했습니다.</p>;

    return (
        <InfiniteScrollList
            data={data?.pages.flatMap((page : Posts) => page) || []}
            renderItem={(post: Post) => (
                <li key={post.postId}>
                    <Link href={`${pathName}/${post.postId}`}>
                    <PostThumbnail post = {post} update = {false}/>
                    {editMode[post.postId] ? (
                            <form onSubmit={(e) => handleSave(e, post.postId)}>
                                <input type="text" name="postTitle" defaultValue={post.postTitle} />
                                <textarea name="description" defaultValue={post.description} />
                                <button type="submit">저장</button>
                                <button type="button" onClick={() => setEditMode((prev) => ({ ...prev, [post.postId]: false }))}>
                                    취소
                                </button>
                            </form>
                        ) : (
                            <>
                                <h3>{post.postTitle}</h3>
                                <p>{post.description}</p>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setEditMode((prev) => ({ ...prev, [post.postId]: true }));
                                    }}
                                >
                                    수정
                                </button>
                            </>
                        )}
                        <p>상태 : {post.status}</p>
                        <p>조회수: {post.viewCount}</p>
                    </Link>
                </li>
            )}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
        />
    );
};

export const PostDetails: React.FC<PostProps> = ({ boardId, postId }) => {
    const queryClient = useQueryClient();
    const [isEditing, setIsEditing] = useState(false);

    const cachedPosts = queryClient.getQueryData<Post[]>(["posts", boardId]);
    const cachedPost = Array.isArray(cachedPosts)
        ? cachedPosts.find((post) => post.postId === Number(postId))
        : undefined;

    const { data: post, status, error } = useQuery({
        queryKey: ["post", boardId, postId],
        queryFn: () => fetchPost({ boardId, postId }),
        enabled: !cachedPost,
    });

    const postData = cachedPost || post;

    const updateMutation = useMutation({
        mutationFn: (updatedData: PostRequest) => updatePost({ boardId, postId, postData: updatedData }),
        onSuccess: (updatedPost) => {
            queryClient.setQueryData(["post", boardId, postId], updatedPost);
            setIsEditing(false);
        },
    });

    if (status === "pending" && !cachedPost) return <p>로딩 중...</p>;
    if (status === "error") return <p>게시글을 불러오지 못했습니다. {error?.message}</p>;
    if (!postData) return <p>게시글이 존재하지 않습니다.</p>;

    const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedPost = {
            boardId,
            postTitle: formData.get("postTitle") as string,
            description: formData.get("description") as string,
        };
        updateMutation.mutate(updatedPost);
    };

    return (
        <article>
            <PostThumbnail post={postData} update = {true} />
            {isEditing ? (
                <form onSubmit={handleSave}>
                    <input type="text" name="postTitle" defaultValue={postData.postTitle} />
                    <textarea name="description" defaultValue={postData.description} />
                    <button type="submit">저장</button>
                    <button type="button" onClick={() => setIsEditing(false)}>취소</button>
                </form>
            ) : (
                <>
                    <h1>{postData.postTitle}</h1>
                    <p>{postData.description}</p>
                    <button onClick={() => setIsEditing(true)}>수정</button>
                </>
            )}
            <p>현재 상태 : {postData.status}</p>
            <p>조회수: {postData.viewCount}</p>
            <p>작성일: {postData.createdAt ? new Date(postData.createdAt).toLocaleDateString() : "작성일 없음"}</p>
        </article>
    );
};
