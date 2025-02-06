import React from 'react';
import BoardList from './BoardList';
import * as styles from './boards.css';

const Board: React.FC = () => {
  return (
    <div className={styles.boardContainer}>
      <h1 className={styles.boardPageTitle}>Boards</h1>
      <div className={styles.boardListContainer}>
        <BoardList boardStatus={ "active" }/>
      </div>
    </div>
  );
};

export default Board;
