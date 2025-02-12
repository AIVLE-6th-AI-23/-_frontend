import React from "react";
import * as styles from "@/styles/Actionbuton.css";

interface DeletePostButtonProps {
  postId: number;
  onOpenModal:(postId: number) => void;
}

const DeletePostButton: React.FC<DeletePostButtonProps> = ({
  postId,
  onOpenModal
}) => {

  return (
    <button 
      className={styles.deleteButton} 
      onClick={(e) => { 
        onOpenModal(postId); // 모달을 열 때 postId를 전달
        e.stopPropagation(); // 이벤트 전파 막기
      }}
    >
      delete
    </button>

  );
};

export default DeletePostButton;
