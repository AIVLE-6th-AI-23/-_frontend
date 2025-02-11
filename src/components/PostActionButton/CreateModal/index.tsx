import React, { useState, useEffect } from "react";
import * as styles from "@/styles/Actionbuton.css";

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (postTitle: string, description: string) => void;
  initialData?: {
    postTitle: string;
    description: string;
  };
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const [postTitle, setpostTitle] = useState<string>(initialData?.postTitle || "");
  const [description, setDescription] = useState<string>(initialData?.description || "");
  
  useEffect(() => {
    if (initialData) {
      setpostTitle(initialData.postTitle);
      setDescription(initialData.description);
    }
  }, [initialData]);  

  const handleSave = () => {
    if (!postTitle.trim() || !description.trim()) {
      alert("제목과 설명을 입력해주세요.");
      return;
    }
    onSave(postTitle, description);
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
            value={postTitle}
            onChange={(e) => setpostTitle(e.target.value)}
          />
          <textarea
            className={styles.descriptionField_post}
            placeholder="설명"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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

export default CreatePostModal;
