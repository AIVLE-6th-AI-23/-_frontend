import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPosts } from '@/services/post';
import { Posts } from '@/types/types';
import PostSection from './PostSection';
import * as styles from './posts.css';

interface PostListProps {
    boardId: number;
}

const Project: React.FC<PostListProps> = ({ boardId }) => {
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        isLoading,
        status: queryStatus,
    } = useInfiniteQuery({
        queryKey: ['posts', boardId],
        queryFn: ({ pageParam = null }) => fetchPosts({ boardId, pageParam }),
        getNextPageParam: (lastPage: Posts) =>
            lastPage.length > 0 ? lastPage[lastPage.length - 1].createdAt : null,
        initialPageParam: null,
        retry: false,
    });

    if (isLoading) return <p>로딩 중...</p>;
    if (queryStatus === 'error') return <p>게시글을 불러오지 못했습니다.</p>;

    // 📌 전체 데이터에서 상태별로 분류
    const allPosts = data?.pages.flatMap((page) => page) || [];
    const todoPosts = allPosts.filter((post) => !post.status );
    const inProgressPosts = allPosts.filter((post) => post.status);

    return (
        <div>
            <h1 className={styles.postsTitle}>Board {boardId} Posts</h1>
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

export default Project;
