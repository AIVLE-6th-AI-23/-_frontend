import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Post } from '@/types/types';
import InfiniteScrollList from '@/components/InfiniteScrollList';
import PostThumbnail from '@/components/PostThumbnail';
import * as styles from './postSection.css';

interface PostSectionProps {
    title: string;
    posts: Post[];
    fetchNextPage: () => void;
    isFetchingNextPage: boolean;
    inProgress: boolean;
}

const PostSection: React.FC<PostSectionProps> = ({ title, posts, fetchNextPage, isFetchingNextPage, inProgress }) => {
    const pathName = usePathname();
    const router = useRouter();

    const handlePostClick = (postId: number) => {
        router.push(`${pathName}/${postId}`);
    };

    return (
        <section className={styles.postSection}>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <InfiniteScrollList
                data={posts}
                renderItem={(post) => (
                    <li 
                        key={post.postId} 
                        className={styles.postItem}
                        onClick={() => handlePostClick(post.postId)}
                        style={{ cursor: 'pointer' }}
                    >
                        <PostThumbnail post={post} update={false} />
                        <h3 className={styles.postTitle}>{post.postTitle}</h3>
                        <p className={styles.postDescription}>{post.description}</p>
                        {inProgress && <p className={styles.postStatus}>상태: {post.status}</p>}
                        <p className={styles.postViewCount}>조회수: {post.viewCount}</p>
                    </li>
                )}
                fetchNextPage={fetchNextPage}
                isFetchingNextPage={isFetchingNextPage}
            />
        </section>
    );
};

export default PostSection;
