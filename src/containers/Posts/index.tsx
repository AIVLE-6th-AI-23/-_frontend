import React, { useEffect } from 'react';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPosts } from '@/services/post';
import { Posts } from '@/types/types';
import PostSection from './PostSection';
import * as styles from './posts.css';
import CreatePostButton from '@/components/PostActionButton/Create';
import GlobalLoadingBar from '@/components/LoadingBar';

interface PostListProps {
    boardId: number;
}

const PostsPage: React.FC<PostListProps> = ({ boardId }) => {
    const queryClient = useQueryClient();
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        isLoading,
        status
    } = useInfiniteQuery({
        queryKey: ['posts', boardId],
        queryFn: ({ pageParam = null }) => fetchPosts({ boardId, pageParam }),
        getNextPageParam: (lastPage: Posts) =>
            lastPage.length > 0 ? lastPage[lastPage.length - 1].createdAt : null,
        initialPageParam: null,
        refetchOnWindowFocus: false,
        retry: false,
    });

    useEffect(() => {
        if (status === "error") {
        queryClient.resetQueries({ queryKey: ["posts", boardId] });
        throw new Error();
        }
    }, [status, queryClient]);
    
    // 📌 전체 데이터에서 상태별로 분류
    const allPosts = data?.pages.flatMap((page) => page) || [];
    const todoPosts = allPosts.filter((post) => !post.status );
    const inProgressPosts = allPosts.filter((post) => post.status);

    return (
        <div>
            {isLoading && <GlobalLoadingBar />}
            <h1 className={styles.postsTitle}>Board {boardId} Posts</h1>
            <CreatePostButton boardId={boardId} />
            <div className={styles.postContainer}>
                <div className={styles.postSectionWrapper}>
                    {/* ToDo Section */}
                    <PostSection
                        title="To Do"
                        posts={todoPosts}
                        fetchNextPage={fetchNextPage}
                        isFetchingNextPage={isFetchingNextPage}
                        inProgress={false}
                    />
                </div>
                <div className={styles.postSectionWrapper}>
                    {/* In Progress Section */}
                    <PostSection
                        title="In Progress"
                        posts={inProgressPosts}
                        fetchNextPage={fetchNextPage}
                        isFetchingNextPage={isFetchingNextPage}
                        inProgress={true}
                    />
                </div>
            </div>
        </div>
    );
    
};

export default PostsPage;
