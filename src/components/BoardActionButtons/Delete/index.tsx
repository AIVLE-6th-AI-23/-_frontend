import React from "react";
import * as styles from "@/styles/Actionbuton.css";

interface DeleteBoardProps {
  boardId: number;
  onOpenModal: (boardId: number) => void;
}

const DeleteBoardButton: React.FC<DeleteBoardProps> = ({ boardId,onOpenModal }) => {
  return (
    <button className={styles.deleteButton} onClick={(e) => {onOpenModal(boardId); e.stopPropagation();}}>
      삭제
    </button>
  );
};

export default DeleteBoardButton;
