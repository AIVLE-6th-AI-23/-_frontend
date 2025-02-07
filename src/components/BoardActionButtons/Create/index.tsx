import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBoard } from "@/services/board";
import { BoardRequest } from "@/types/types";
import * as styles from "@/styles/Actionbuton.css";

const CreateBoardButton: React.FC = () => {
  const queryClient = useQueryClient();
  const [isCreating, setIsCreating] = useState(false);
  const [boardTitle, setBoardTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deptIds, setDeptIds] = useState("");
  
  const createMutation = useMutation({
    mutationFn: (boardData: BoardRequest) => createBoard({ boardData }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["boards"],
    });
      setIsCreating(false);
      setBoardTitle("");
      setDescription("");
      setDeptIds("");
    },
    onError: (error) => alert(`게시판 생성 실패: ${error.message}`),
  });
  
  const handleCreateBoard = () => {
    if (!boardTitle.trim() || !description.trim()) {
      alert("제목과 설명을 입력해주세요.");
      return;
    }
    createMutation.mutate({
      boardTitle,
      description,
      endDate: null,
      deptIds: deptIds.split(",").map(id => id.trim()),
    });
  };
  

  return (
    <div className={styles.createContainer}>
      {isCreating ? (
        <div className={styles.createForm}>
          <input
            className={styles.inputField}
            type="text"
            placeholder="게시판 제목"
            value={boardTitle}
            onChange={(e) => setBoardTitle(e.target.value)}
          />
          <textarea
            className={styles.inputField}
            placeholder="설명"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className={styles.inputField}
            type="text"
            placeholder="부서 ID (쉼표로 구분)"
            value={deptIds}
            onChange={(e) => setDeptIds(e.target.value)}
          />
          <button className={styles.saveButton} onClick={handleCreateBoard}>✅ Save</button>
          <button className={styles.cancelButton} onClick={() => setIsCreating(false)}>❌ Cancel</button>
        </div>
      ) : (
        <button className={styles.createButton} onClick={() => setIsCreating(true)}>
          ➕ Create Board
        </button>
      )}
    </div>
  );
};

export default CreateBoardButton;
