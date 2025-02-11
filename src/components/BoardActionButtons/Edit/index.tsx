import React from "react";
import * as styles from "@/styles/Actionbuton.css";

interface EditBoardButtonProps {
  onEdit: () => void;
}

const EditBoardButton: React.FC<EditBoardButtonProps> = ({ onEdit }) => {
  return (
    <button className={styles.editButtonImage} onClick={(e) => {
      e.stopPropagation();
      onEdit();
    }}>
      <img src="/images/update.png"  className={styles.editButton} />
    </button>
  );
};

export default EditBoardButton;
