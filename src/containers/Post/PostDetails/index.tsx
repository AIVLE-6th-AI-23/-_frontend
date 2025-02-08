import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPost, updatePost } from '@/services/post';
import { Post, PostRequest } from '@/types/types';
import PostThumbnail from '@/components/PostThumbnail';
import * as styles from './postDetails.css';

interface PostProps {
    boardId: number;
    postId: number;
}

export const PostDetails: React.FC<PostProps> = ({ boardId, postId }) => {
    const queryClient = useQueryClient();
    const [isEditing, setIsEditing] = useState(false);

    const cachedPosts = queryClient.getQueryData<Post[]>(["posts", boardId]);
    const cachedPost = Array.isArray(cachedPosts)
        ? cachedPosts.find((post) => post.postId === Number(postId))
        : undefined;

    const { data: post, status, isLoading, error } = useQuery({
        queryKey: ["post", boardId, postId],
        queryFn: () => fetchPost({ boardId, postId }),
        enabled: !cachedPost,
    });

    useEffect(() => {
        if (status === "error") {
        queryClient.resetQueries({ queryKey: ["posts", boardId] });
        throw new Error();
        }
    }, [status, queryClient]);

    const postData = cachedPost || post;

    const updateMutation = useMutation({
        mutationFn: (updatedData: PostRequest) => updatePost({ boardId, postId, postData: updatedData }),
        onSuccess: (updatedPost) => {
            queryClient.setQueryData(["post", boardId, postId], updatedPost);
            setIsEditing(false);
        },
    });

    if (!postData) return <p className={styles.infoTextStyle}>게시글이 존재하지 않습니다.</p>;

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
        <div>
            <div className={styles.postThumbnailStyle}>
                <PostThumbnail post={postData} update={true} />
            </div>

            <div className="text-center space-y-2">
                <h1 className={styles.postTitleStyle}>{postData.postTitle}</h1>
                <p className={styles.postDescriptionStyle}>{postData.description}</p>
            </div>

            {isEditing ? (
                <form onSubmit={handleSave} className={styles.editFormStyle}>
                    <input type="text" name="postTitle" defaultValue={postData.postTitle} className="w-full p-2 border rounded" />
                    <textarea name="description" defaultValue={postData.description} className="w-full p-2 border rounded"></textarea>
                    <div className="flex justify-end space-x-2">
                        <button type="submit" className={styles.buttonStyle}>저장</button>
                        <button type="button" onClick={() => setIsEditing(false)} className={styles.buttonStyle}>취소</button>
                    </div>
                </form>
            ) : (
                <div className="flex justify-center">
                    <button onClick={() => setIsEditing(true)} className={styles.buttonStyle}>수정</button>
                </div>
            )}

            <div className={styles.infoTextStyle}>
                <p>조회수: {postData.viewCount}</p>
                <p>작성일: {postData.createdAt ? new Date(postData.createdAt).toLocaleDateString() : "작성일 없음"}</p>
            </div>
        </div>
    );
};

export default PostDetails;
