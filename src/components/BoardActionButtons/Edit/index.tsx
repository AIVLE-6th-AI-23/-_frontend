import React from "react";
import * as styles from "@/styles/Actionbuton.css";

interface EditBoardButtonProps {
  onEdit: () => void;
}

const EditBoardButton: React.FC<EditBoardButtonProps> = ({ onEdit }) => {
  return (
    <button className={styles.editButton} onClick={(e) => {
      e.stopPropagation();
      onEdit();
    }}>
      edit
    </button>
  );
};

export default EditBoardButton;
