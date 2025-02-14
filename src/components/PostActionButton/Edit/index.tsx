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
      수정
     </button>
   );
};

export default EditPostButton;
