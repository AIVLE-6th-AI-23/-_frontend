import React, { useState, useEffect } from "react";
import Select, { MultiValue } from "react-select";
import * as styles from "@/styles/Actionbuton.css";
import { DepartmentOption } from "@/types/types";
import { DepartmentOptions } from "@/constants/constants";

interface CreateBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (boardTitle: string, description: string, deptIds: string[]) => void;
  initialData?: {
    boardTitle: string;
    description: string;
    deptIds: string[];
  };
}

const CreateBoardModal: React.FC<CreateBoardModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const [boardTitle, setBoardTitle] = useState<string>(initialData?.boardTitle || "");
  const [description, setDescription] = useState<string>(initialData?.description || "");
  const [selectedDepts, setSelectedDepts] = useState<DepartmentOption[]>([]);

  useEffect(() => {

    console.log("Initial Data from Parent:", initialData);
    console.log("initialData.deptIds:", initialData?.deptIds);

    if (initialData && initialData.deptIds) {
      setBoardTitle(initialData.boardTitle);
      setDescription(initialData.description);
      setSelectedDepts(
        DepartmentOptions.filter((dept) =>
          initialData.deptIds?.includes(dept.value) 
        )
      );
    }
  }, [initialData]);  

  const handleSave = () => {
    if (!boardTitle.trim() || !description.trim()) {
      alert("제목과 설명을 입력해주세요.");
      return;
    }
    console.log("Selected Departments:", selectedDepts.map((dept) => dept.value));
    onSave(boardTitle, description, selectedDepts.map((dept) => dept.value));
    onClose();
  };

  return (
    isOpen && (
      <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <input
            className={styles.inputField}
            type="text"
            placeholder="게시판 제목"
            value={boardTitle}
            onChange={(e) => setBoardTitle(e.target.value)}
          />
          <textarea
            className={styles.descriptionField}
            placeholder="설명"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Select
            className={styles.multiSelect}
            options={DepartmentOptions}
            isMulti
            value={selectedDepts}
            onChange={(selectedOptions: MultiValue<DepartmentOption>) =>{
              console.log("Selected Options:", selectedOptions);
              setSelectedDepts(selectedOptions as DepartmentOption[]);
            }}
            placeholder="부서 선택..."
          />
          <div className={styles.modalActions}>
            <button className={styles.saveButton} onClick={handleSave}>
              Save
            </button>
            <button className={styles.cancelButton} onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default CreateBoardModal;
