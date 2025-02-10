import React, { useState } from "react";
import Select, { MultiValue } from "react-select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBoard } from "@/services/board";
import { BoardRequest, DepartmentOption } from "@/types/types";
import * as styles from "@/styles/Actionbuton.css";
import { DepartmentOptions } from "@/constants/constants";

const CreateBoardButton: React.FC = () => {
  const queryClient = useQueryClient();
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [boardTitle, setBoardTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedDepts, setSelectedDepts] = useState<DepartmentOption[]>([]);

  const createMutation = useMutation({
    mutationFn: (boardData: BoardRequest) => createBoard({ boardData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boards"] });
      setIsCreating(false);
      setBoardTitle("");
      setDescription("");
      setSelectedDepts([]);
    },
    onError: (error: any) => alert(`게시판 생성 실패: ${error.message}`),
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
      deptIds: selectedDepts.map((dept) => dept.value),
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

          <Select
            className={styles.multiSelect}
            options={DepartmentOptions}
            isMulti
            value={selectedDepts}
            onChange={(selectedOptions: MultiValue<DepartmentOption>) =>
              setSelectedDepts(selectedOptions as DepartmentOption[])
            }
            placeholder="부서 선택..."
          />

          <button className={styles.saveButton} onClick={handleCreateBoard}>
            ✅ Save
          </button>
          <button className={styles.cancelButton} onClick={() => setIsCreating(false)}>
            ❌ Cancel
          </button>
        </div>
      ) : (
        <button className={styles.createButton} onClick={() => setIsCreating(true)}>
          ➕
        </button>
      )}
    </div>
  );
};

export default CreateBoardButton;
