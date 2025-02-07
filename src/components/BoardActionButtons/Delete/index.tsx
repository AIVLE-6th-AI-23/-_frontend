import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBoard } from "@/services/board";
import * as styles from "@/styles/Actionbuton.css";

interface DeleteBoardProps {
  boardId: number;
}

const DeleteBoardButton: React.FC<DeleteBoardProps> = ({ boardId }) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (boardId: number) => deleteBoard({boardId}), 
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["boards"],
      })
    },
    onError: (error) => alert(`게시판 삭제 실패: ${error.message}`),
  });
  
  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (window.confirm("이 게시판을 삭제하시겠습니까?")) {
      deleteMutation.mutate(boardId);
    }
  };
  

  return (
    <button className={styles.deleteButton} onClick={handleDelete}>
      🗑️ Delete
    </button>
  );
};

export default DeleteBoardButton;
