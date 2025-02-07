import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "@/services/post";
import { PostRequest } from "@/types/types";
import * as styles from "@/styles/Actionbuton.css";

interface CreatePostButtonProps {
  boardId: number; // 게시판 ID
}

const CreatePostButton: React.FC<CreatePostButtonProps> = ({ boardId }) => {
  const [isCreating, setIsCreating] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (newPost: PostRequest) =>
      createPost({ boardId, postData: newPost }),
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: ["posts", boardId],
        });
      setIsCreating(false);
      setPostTitle("");
      setDescription("");
    },
    onError: () => alert("게시글 생성 실패"),
  });

  const handleCreate = () => {
    createMutation.mutate({
      boardId,
      postTitle,
      description,
    });
  };

  return (
    <div>
      {isCreating ? (
        <div className={styles.formContainer}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="제목"
            value={postTitle}
            onClick={(e) => e.stopPropagation()} 
            onChange={(e) => setPostTitle(e.target.value)}
          />
          <textarea
            className={styles.inputField}
            placeholder="내용"
            value={description}
            onClick={(e) => e.stopPropagation()} 
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className={styles.saveButton} onClick={handleCreate}>
            Save
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => setIsCreating(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          className={styles.createButton}
          onClick={() => setIsCreating(true)}
        >
          ➕ Create Post
        </button>
      )}
    </div>
  );
};

export default CreatePostButton;
