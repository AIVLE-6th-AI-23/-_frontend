import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import ContentAnalysis from './ContentAnalysis';
import * as styles from './post.css'
import PostDetails from './PostDetails';
import GlobalLoadingBar from '@/components/LoadingBar';

interface PostPageProps {
    boardId: number;
    postId: number;
}

const PostPage: React.FC<PostPageProps> = ({ boardId, postId }) => {
    const isFetching = useIsFetching() > 0; 
    const isMutating = useIsMutating() > 0;
    const isLoading = isFetching || isMutating;
    
    return (
      <div className={styles.card}>
        <div className={styles.tools}>
          <div className={styles.circle}>
            <span className={`${styles.box} ${styles.red}`}></span>
          </div>
          <div className={styles.circle}>
            <span className={`${styles.box} ${styles.yellow}`}></span>
          </div>
          <div className={styles.circle}>
            <span className={`${styles.box} ${styles.green}`}></span>
          </div>
        </div>
        <div className={styles.card__content}>
      </div>
      {/* --conatainer --*/}
          <div className={styles.postContainer}>
            {isLoading && <GlobalLoadingBar />}
            <div className={styles.resultWrapper}>
            <PostDetails boardId={boardId} postId={postId}/>
            </div>
          </div>
          <div className={styles.contentAnalysisContainer}>
              <ContentAnalysis postId={postId}/>
            </div>
      </div>
    );
  };

export default PostPage;