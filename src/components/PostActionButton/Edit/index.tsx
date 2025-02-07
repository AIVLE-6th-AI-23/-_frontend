import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost } from "@/services/post";
import { Post, PostRequest } from "@/types/types";
import * as styles from "@/styles/Actionbuton.css";

interface EditPostButtonProps {
  boardId: number; // 게시판 ID
  post: Post; // 게시글 정보
}

const EditPostButton: React.FC<EditPostButtonProps> = ({ boardId, post }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [postTitle, setPostTitle] = useState(post.postTitle);
  const [description, setDescription] = useState(post.description);
  const queryClient = useQueryClient();

  const editMutation = useMutation({
    mutationFn: (updatedPost: PostRequest) =>
      updatePost({
        boardId: post.boardId,
        postId: post.postId,
        postData: updatedPost,
      }),
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: ["posts", boardId],
        });
        setIsEditing(false);
    },
    onError: () => alert("게시글 수정 실패"),
  });

  const handleSave = (event: React.MouseEvent) => {
    event.stopPropagation();
    editMutation.mutate({
      boardId,
      postTitle,
      description,
    });
  };
  const handleCancel = (event: React.MouseEvent) => {
      event.stopPropagation();
      setIsEditing(false);
    };
  
  const handleEditClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsEditing(true);
  };
  return (
    <div>
      {isEditing ? (
        <div className={styles.formContainer}>
          <input
            type="text"
            className={styles.inputField}
            value={postTitle}
            onClick={(e) => e.stopPropagation()} 
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <textarea
            className={styles.inputField}
            value={description}
            onClick={(e) => e.stopPropagation()} 
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
          <button
            className={styles.cancelButton}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className={styles.editButton}
          onClick={handleEditClick}
        >
          ✏️ Edit
        </button>
      )}
    </div>
  );
};

export default EditPostButton;
