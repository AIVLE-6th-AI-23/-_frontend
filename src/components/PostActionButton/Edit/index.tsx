import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost } from "@/services/post";
import { Post, PostRequest } from "@/types/types";
import * as styles from "@/styles/Actionbuton.css";

interface EditPostButtonProps {
  onEdit: () => void;
}

const EditPostButton: React.FC<EditPostButtonProps> = ({ onEdit }) => {
 return (
     <button className={styles.editButton} onClick={(e) => {
       e.stopPropagation();
       onEdit();
     }}>
      edit
     </button>
   );
};

export default EditPostButton;
