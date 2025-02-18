import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBoard } from "@/services/board";
import { BoardRequest } from "@/types/types";
import CreateBoardModal from "@/components/BoardActionButtons/CreateModal";
import * as styles from "@/styles/Actionbuton.css";
import { AxiosError } from "axios";
import { useState } from "react";


interface CreateBoardButtonProps {
  isCreating: boolean;
  setIsCreating: React.Dispatch<React.SetStateAction<boolean>>;
}


const CreateBoardButton: React.FC<CreateBoardButtonProps> = ({ isCreating, setIsCreating }) => {
  const queryClient = useQueryClient();
  const [createError, setcreateError] = useState(false);
  const createMutation = useMutation({
    mutationFn: (boardData: BoardRequest) => createBoard({ boardData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boards"] });
      setIsCreating(false);
    },
    throwOnError: (error: AxiosError) => {
      if(error.response?.status === 403 || error.response?.status === 401){ 
        if(!createError){
          alert("<권한 부족> 게시글 생성 실패");
          setcreateError(true);
        } 
        return false;
      } else {
        return true
      }
    },
    
  });

  const handleCreateBoard = (boardTitle: string, description: string, deptIds: string[], endDate : string|null) => {
    createMutation.mutate({
      boardTitle,
      description,
      endDate,
      deptIds,
    });
  };

  return (
    <div className={styles.createContainer}>
      <CreateBoardModal
        isOpen={isCreating}
        onClose={() => setIsCreating(false)}
        onSave={handleCreateBoard}
        initialData={{ boardTitle: "", description: "", deptIds: [] , endDate: null}} 
      />
      {!isCreating && (
        <button className={styles.createButton} onClick={() => setIsCreating(true)}> 
          <img src="/images/plus.png" className={styles.createButtonImage} />
        </button>
      )}
    </div>
  );
};

export default CreateBoardButton;
