import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPost, updatePost } from '@/services/post';
import { Post, PostRequest } from '@/types/types';
import PostThumbnail from '@/components/PostThumbnail';
import ContentAnalysis from '@/containers/Post/ContentAnalysis';
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

    const postData = cachedPost || post;

    const updateMutation = useMutation({
        mutationFn: (updatedData: PostRequest) => updatePost({ boardId, postId, postData: updatedData }),
        onSuccess: (updatedPost) => {
            queryClient.setQueryData(["post", boardId, postId], updatedPost);
            setIsEditing(false);
        },
    });

    if (isLoading) return <p className={styles.infoTextStyle}>로딩 중...</p>;
    if (status === "error") return <p className={styles.infoTextStyle}>게시글을 불러오지 못했습니다. {error?.message}</p>;
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
        <div className={styles.postDetailsContainer}>
            {/* 썸네일 강조 */}
            <div className={styles.postThumbnailStyle}>
                <PostThumbnail post={postData} update={true} />
            </div>
            
            {/* 제목 & 설명 간략화 */}
            <div className="text-center space-y-2">
                <h1 className={styles.postTitleStyle}>{postData.postTitle}</h1>
                <p className={styles.postDescriptionStyle}>{postData.description}</p>
            </div>

            {/* 게시글 편집 */}
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

            {/* 게시글 추가 정보 */}
            <div className={styles.infoTextStyle}>
                <p>조회수: {postData.viewCount}</p>
                <p>작성일: {postData.createdAt ? new Date(postData.createdAt).toLocaleDateString() : "작성일 없음"}</p>
            </div>
            
            {/* 콘텐츠 분석 결과 */}
            <div className={styles.contentAnalysisContainer}>
                <ContentAnalysis postId={Number(postId)} />
            </div>
        </div>
    );
};

export default PostDetails;
