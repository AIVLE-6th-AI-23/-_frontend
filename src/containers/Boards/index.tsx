import React, { useState } from 'react';
import BoardList from './BoardList';
import * as styles from './boards.css';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import GlobalLoadingBar from '@/components/LoadingBar';
import CreateBoardButton from '@/components/BoardActionButtons/Create';
import ToggleButton from '@/components/ToggleButton';

const Board: React.FC = () => {
  const [isActive, setIsActive] = useState(true);
  const isFetching = useIsFetching() > 0; 
  const isMutating = useIsMutating() > 0;
  const isLoading = isFetching || isMutating;

  return (
    <div className={styles.boardContainer}>
      {isLoading && <GlobalLoadingBar />}
      <div className={styles.boardHeader}>
        <div className={styles.toggleLeft}>
        <ToggleButton isActive={isActive} onToggle={() => setIsActive((prev : boolean) => !prev)} />
        <h1 className={styles.boardPageTitle}>Boards</h1>
        </div>
        <CreateBoardButton />
      </div>
      <BoardList boardStatus={isActive ? "active" : "completed"} />
    </div>
  );
};

export default Board;
