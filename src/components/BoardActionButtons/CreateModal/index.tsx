import React, { useState, useEffect } from "react";
import Select, { MultiValue } from "react-select";
import * as styles from "@/styles/Actionbuton.css";
import { DepartmentOption } from "@/types/types";
import { DepartmentOptions } from "@/constants/constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";  // 한국 로케일 가져오기
import { toZonedTime, format } from "date-fns-tz";

interface CreateBoardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (boardTitle: string, description: string, deptIds: string[], endDate: string | null) => void;
  initialData?: {
    boardTitle: string;
    description: string;
    deptIds: string[];
    endDate?: string | null;
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
  const [endDate, setEndDate] = useState<Date | null>(initialData?.endDate ? new Date(initialData.endDate) : null);

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
      setEndDate(initialData.endDate ? new Date(initialData.endDate):null);
    }
  }, [initialData]);  

  const handleSave = () => {
    if (!boardTitle.trim() || !description.trim()) {
      alert("제목과 설명을 입력해주세요.");
      return;
    }

    const endDateString = endDate ? format(toZonedTime(endDate, "Asia/Seoul"), "yyyy-MM-dd'T'HH:mm:ss") : null;
    console.log("End Date on Save:", endDateString);
    onSave(boardTitle, description, selectedDepts.map((dept) => dept.value), endDateString);
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
          {/* DatePicker 추가 */}
          <div className={styles.datePickerContainer}>
            <DatePicker
              selected={endDate} 
              dateFormat="yyyy-MM-dd"
              onChange={(date: Date | null) => {
                setEndDate(date)
                console.log("달력 쳌 :" , date)
              }}
              locale={ko}
              isClearable 
              placeholderText="종료 날짜를 선택하세요"
            />
          </div>

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
