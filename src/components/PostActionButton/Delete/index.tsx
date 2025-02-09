import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "@/services/post";
import * as styles from "@/styles/Actionbuton.css";

interface DeletePostButtonProps {
  boardId: number;
  postId: number;
}

const DeletePostButton: React.FC<DeletePostButtonProps> = ({
  boardId,
  postId,
}) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: () => deletePost({ boardId, postId }),
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: ["posts", boardId],
        });
    },
    onError: () => alert("게시글 삭제 실패"),
  });

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (window.confirm("정말 삭제 하시겠습니까?")) {
      deleteMutation.mutate();
    }
  };

  return (
    <button className={styles.deleteButton} onClick={handleDelete}>
      🗑️
    </button>
  );
};

export default DeletePostButton;
