import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPost, updatePost } from '@/services/post';
import { Post, PostRequest } from '@/types/types';
import PostThumbnail from '@/components/PostThumbnail';
import * as styles from './postDetails.css';
import EditPostButton from '@/components/PostActionButton/Edit';
import CreatePostModal from '@/components/PostActionButton/CreateModal';

interface PostProps {
    boardId: number;
    postId: number;
}

export const PostDetails: React.FC<PostProps> = ({ boardId, postId }) => {
    const queryClient = useQueryClient();
    const [isEditing, setIsEditing] = useState(false);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
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

    const handleEditClick = (post: Post) => {
        setSelectedPost(post);
        setIsEditing(true);
      };

    const handleSave = (postTitle: string, description: string) => {
        if (!selectedPost) return;

        updateMutation.mutate({boardId, postTitle, description});
    };

    return (
        <>
            {isEditing && selectedPost && (
                <CreatePostModal
                isOpen={isEditing}
                onClose={() => setIsEditing(false)}
                onSave={handleSave}
                initialData={{
                    postTitle: selectedPost.postTitle,
                    description: selectedPost.description,
                }}
                />      
            )}
            <div className={styles.postThumbnailStyle}>
                <PostThumbnail post={postData} update={true} />
            </div>

            <div className={styles.postHeader}>
                <h1 className={styles.postTitleStyle}>{postData.postTitle}</h1>
                <EditPostButton onEdit={() => handleEditClick(postData)}/>
            </div>
            <p className={styles.postDescriptionStyle}>{postData.description}</p>
            
            <div className={styles.infoTextStyle}>
                <p>조회수: {postData.viewCount}</p>
                <p>작성일: {postData.createdAt ? new Date(postData.createdAt).toLocaleDateString() : "작성일 없음"}</p>
            </div>
        </>
    );
};

export default PostDetails;
