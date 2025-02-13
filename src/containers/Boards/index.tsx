import React, { useState } from 'react';
import BoardList from './BoardList';
import * as styles from './boards.css';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import GlobalLoadingBar from '@/components/LoadingBar';
import CreateBoardButton from '@/components/BoardActionButtons/Create';
import ToggleButton from '@/components/ToggleButton';

const Board: React.FC = () => {
  const [isActive, setIsActive] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const isFetching = useIsFetching() > 0; 
  const isMutating = useIsMutating() > 0;
  const isLoading = isFetching || isMutating;

  return (
    <div className={styles.boardContainer}>
      {isLoading && <GlobalLoadingBar />}
      <div className={styles.boardHeader}>
        <ToggleButton isActive={isActive}
         onToggle={() => setIsActive((prev : boolean) => !prev)}
         labels={["Active","Completed"]} />
        <h1 className={styles.boardPageTitle}>대시보드</h1>
        <CreateBoardButton isCreating={isCreating} setIsCreating={setIsCreating} />
        </div>
      <BoardList boardStatus={isActive ? "active" : "completed"}
       onOpenModal={() => {}} />
    </div>
  );
};

export default Board;
