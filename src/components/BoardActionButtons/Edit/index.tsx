import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBoard } from "@/services/board";
import { Board, BoardRequest } from "@/types/types";
import * as styles from "@/styles/Actionbuton.css";

interface EditBoardProps {
  board: Board;
}

const EditBoard: React.FC<EditBoardProps> = ({ board }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(board.boardTitle);
  const [editDescription, setEditDescription] = useState(board.description);
  const queryClient = useQueryClient();

  const updateMutation = useMutation({
    mutationFn: (updatedData: BoardRequest) =>
      updateBoard({ boardId: board.boardId, boardData: updatedData }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["boards"],
      })
      setIsEditing(false);
    },
    onError: (error) => alert(`게시판 수정 실패: ${error.message}`),
  });

  const handleSave = (event: React.MouseEvent) => {
    event.stopPropagation();
    updateMutation.mutate({
      boardTitle: editTitle,
      description: editDescription,
      endDate: null,
      deptIds: board.deptIds,
    });
  };

  const handleCancel = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsEditing(false);
  };

  const handleEditClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsEditing(true);
  };

  return (
    <div className={styles.buttonContainer}>
      {isEditing ? (
        <>
          <input
            className={styles.editInput}
            type="text"
            value={editTitle}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            className={styles.editInput}
            value={editDescription}
            onClick={(e) => e.stopPropagation()} 
            onChange={(e) => setEditDescription(e.target.value)}
          />
          <button className={styles.saveButton} onClick={handleSave}>
            💾 Save
          </button>
          <button className={styles.cancelButton} onClick={handleCancel}>
            ❌ Cancel
          </button>
        </>
      ) : (
        <button className={styles.editButton} onClick={handleEditClick}>
          ✏️ Edit
        </button>
      )}
    </div>
  );
};

export default EditBoard;
