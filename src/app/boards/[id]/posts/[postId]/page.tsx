"use client";

import React from "react";
import { useParams } from "next/navigation";
import PostPage from "@/containers/Post";


const Post = () => {
    const params = useParams();
    const boardId = params.id;
    const postId = params.postId;

    if (!boardId || !postId || Array.isArray(boardId) || Array.isArray(postId)) {
        return <p>잘못된 요청입니다.</p>;
    }

    return(        
        <PostPage boardId={Number(boardId)} postId={Number(postId)} />
    );
};

export default Post;
