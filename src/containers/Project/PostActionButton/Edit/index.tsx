import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost } from "@/services/post";
import { Post, PostRequest } from "@/types/types";
import * as styles from "../postActionButton.css";

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
        boardId,
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

  const handleSave = () => {
    editMutation.mutate({
      boardId,
      postTitle,
      description,
    });
  };

  return (
    <div>
      {isEditing ? (
        <div className={styles.formContainer}>
          <input
            type="text"
            className={styles.inputField}
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <textarea
            className={styles.inputField}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className={styles.saveButton} onClick={handleSave}>
            Save
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className={styles.editButton}
          onClick={() => setIsEditing(true)}
        >
          ✏️ Edit
        </button>
      )}
    </div>
  );
};

export default EditPostButton;
