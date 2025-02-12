import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Post } from '@/types/types';
import InfiniteScrollList from '@/components/InfiniteScrollList';
import PostThumbnail from '@/components/PostThumbnail';
import * as styles from './postSection.css';
import DeletePostButton from '@/components/PostActionButton/Delete';

interface PostSectionProps {
    title: string;
    posts: Post[];
    fetchNextPage: () => void;
    isFetchingNextPage: boolean;
    inProgress: boolean;
    onDeleteModal: (postId: number) => void; 
}

const PostSection: React.FC<PostSectionProps> = ({ title, posts, fetchNextPage, isFetchingNextPage, inProgress, onDeleteModal }) => {
    const pathName = usePathname();
    const router = useRouter();

    const handlePostClick = (postId: number) => {
        router.push(`${pathName}/${postId}`);
    };

    return (
        <section className={styles.postSection}>
            <div>
            <h2 className={styles.sectionTitle}>{title}</h2>
            </div>
            <div className={styles.postConent}>
            <InfiniteScrollList
                data={posts}
                renderItem={(post) => (
                    <div
                        key={post.postId} 
                        className={styles.postItem}
                        onClick={() => handlePostClick(post.postId)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className={styles.postsWrapper}>
                            <div className={styles.deleteHidden}>
                                <div className={styles.postActions}>
                                    <DeletePostButton 
                                    postId={post.postId} 
                                    onOpenModal={onDeleteModal}
                                    />
                                </div>
                            </div>
                                <PostThumbnail post={post} update={false} />
                                <div className={styles.postBody}>
                                <h3 className={styles.postTitle}>{post.postTitle}</h3>
                                <p className={styles.postDescription}>{post.description}</p>
                                {inProgress && <p className={styles.postStatus}>상태: {post.status}</p>}
                                <p className={styles.postViewCount}>조회수: {post.viewCount}</p>
                            </div>
                        </div>
                    </div>
                    
                )}
                fetchNextPage={fetchNextPage}
                isFetchingNextPage={isFetchingNextPage}
            />
           </div>
        </section>
    );
};

export default PostSection;
