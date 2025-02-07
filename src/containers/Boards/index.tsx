import React from 'react';
import BoardList from './BoardList';
import * as styles from './boards.css';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import GlobalLoadingBar from '@/components/LoadingBar';

const Board: React.FC = () => {
  const isFetching = useIsFetching() > 0; 
  const isMutating = useIsMutating() > 0;
  const isLoading = isFetching || isMutating;

  return (
    <div className={styles.boardContainer}>
      {isLoading && <GlobalLoadingBar />}
      <h1 className={styles.boardPageTitle}>Boards</h1>
      <div className={styles.boardListContainer}>
        <BoardList boardStatus={ "active" }/>
      </div>
    </div>
  );
};

export default Board;
