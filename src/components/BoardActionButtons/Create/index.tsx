import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBoard } from "@/services/board";
import { BoardRequest } from "@/types/types";
import CreateBoardModal from "@/components/BoardActionButtons/CreateModal"; // 모달 컴포넌트 불러오기
import * as styles from "@/styles/Actionbuton.css";

const CreateBoardButton: React.FC = () => {
  const queryClient = useQueryClient();
  const [isCreating, setIsCreating] = useState<boolean>(false);

  const createMutation = useMutation({
    mutationFn: (boardData: BoardRequest) => createBoard({ boardData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boards"] });
      setIsCreating(false); // 모달 닫기
    },
    onError: (error: any) => alert(`게시판 생성 실패: ${error.message}`),
  });

  const handleCreateBoard = (boardTitle: string, description: string, deptIds: string[]) => {
    createMutation.mutate({
      boardTitle,
      description,
      endDate: null,
      deptIds,
    });
  };

  return (
    <div className={styles.createContainer}>
      <CreateBoardModal
        isOpen={isCreating}
        onClose={() => setIsCreating(false)}
        onSave={handleCreateBoard}
        initialData={{ boardTitle: "", description: "", deptIds: [] }} 
      />
      {!isCreating && (
        <button className={styles.createButton} onClick={() => setIsCreating(true)}> 
          <img src="/images/plus.png" className={styles.createButtonImage} />
        </button>
      )}
    </div>
  );
};

export default CreateBoardButton;
