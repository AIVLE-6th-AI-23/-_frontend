import React, { useEffect , useState } from 'react';
import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { fetchPosts } from '@/services/post';
import { Posts } from '@/types/types';
import PostSection from './PostSection';
import * as styles from './posts.css';
import CreatePostButton from '@/components/PostActionButton/Create';
import GlobalLoadingBar from '@/components/LoadingBar';
import ToggleButton from '@/components/ToggleButton';


interface PostListProps {
    boardId: number;
    boardTitle : string;
}

const PostsPage: React.FC<PostListProps> = ({ boardId,boardTitle }) => {
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

    const [isActive, setIsActive] = useState(true);
    const allPosts = data?.pages.flatMap((page) => page) || [];
    const todoPosts = allPosts.filter((post) => !post.status );
    const inProgressPosts = allPosts.filter((post) => post.status);

    return (
        <div className={styles.postContainer}>
            {isLoading && <GlobalLoadingBar />}
            <div className={styles.postsHeader}>
                <ToggleButton isActive={isActive}
                 onToggle={() => setIsActive((prev: boolean) => !prev)}
                 labels={["Todo","Inprogress"]} />
                <h1 className={styles.postsTitle}>{boardTitle}</h1>
                <CreatePostButton boardId={boardId} />
            </div>
            <div className={styles.postSectionWrapper}>
            {isActive && (
                <PostSection
                    title="To Do"
                    posts={todoPosts}
                    fetchNextPage={fetchNextPage}
                    isFetchingNextPage={isFetchingNextPage}
                    inProgress={false}
                />
            )}
                {!isActive && (
                <PostSection
                    title="In Progress"
                    posts={inProgressPosts}
                    fetchNextPage={fetchNextPage}
                    isFetchingNextPage={isFetchingNextPage}
                    inProgress={true}
                />
                )}
            </div>
        </div>
    );
    
};

export default PostsPage;