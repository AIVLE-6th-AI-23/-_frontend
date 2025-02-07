import React, { useState } from "react";
import Select, { MultiValue } from "react-select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBoard } from "@/services/board";
import { BoardRequest } from "@/types/types";
import * as styles from "@/styles/Actionbuton.css";

interface DepartmentOption {
  value: string;
  label: string;
}

const departmentOptions: DepartmentOption[] = [
  { value: "1", label: "개발팀" },
  { value: "2", label: "마케팅팀" },
  { value: "3", label: "디자인팀" },
  { value: "4", label: "인사팀" },
];

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
            options={departmentOptions}
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
          ➕ Create Board
        </button>
      )}
    </div>
  );
};

export default CreateBoardButton;
