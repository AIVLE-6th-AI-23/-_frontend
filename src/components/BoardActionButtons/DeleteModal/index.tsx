import React from "react";
import * as styles from "@/styles/Actionbuton.css";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlayDelete}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.image}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              ></path>
            </svg>
          </div>
          <div className={styles.content}>
            <span className={styles.title}>게시판 삭제</span>
            <p className={styles.message}>
              정말 삭제하시겠습니까? 삭제 후 복구할 수 없습니다.
            </p>
          </div>
          <div className={styles.actions}>
            <button type="button" className={styles.desactivate} onClick={onConfirm}>
              삭제
            </button>
            <button type="button" className={styles.cancel} onClick={onClose}>
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;