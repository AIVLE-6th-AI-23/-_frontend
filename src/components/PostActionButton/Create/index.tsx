import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "@/services/post";
import { PostRequest } from "@/types/types";
import * as styles from "@/styles/Actionbuton.css";
import CreatePostModal from "../CreateModal";

interface CreatePostButtonProps {
  boardId: number; // 게시판 ID
}

const CreatePostButton: React.FC<CreatePostButtonProps> = ({ boardId }) => {
  const [isCreating, setIsCreating] = useState(false);
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (newPost: PostRequest) =>
      createPost({ boardId, postData: newPost }),
    onSuccess: () => {
        queryClient.invalidateQueries({
            queryKey: ["posts", boardId],
        });
      setIsCreating(false);
    },
    onError: () => alert("게시글 생성 실패"),
  });

  const handleCreatePost = (postTitle: string, description: string) => {
    createMutation.mutate({
      boardId,
      postTitle,
      description,
    });
  };

  return (
    <div className={styles.createContainer}>
    <CreatePostModal
      isOpen={isCreating}
      onClose={() => setIsCreating(false)}
      onSave={handleCreatePost}
      initialData={{ postTitle: "", description: ""}} 
    />
    {!isCreating && (
      <button className={styles.createButton} onClick={() => setIsCreating(true)}> 
        <img src="/images/plus.png" className={styles.createButtonImage} />
      </button>
    )}
  </div>
  );
};

export default CreatePostButton;
