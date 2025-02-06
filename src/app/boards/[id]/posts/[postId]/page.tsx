"use client";

import React from "react";
import { useParams } from "next/navigation";
import { PostDetails } from "@/containers/Post/PostDetails";
import ContentAnalysis from "@/containers/Post/ContentAnalysis";

const PostPage = () => {
    const params = useParams();
    const boardId = params.id;
    const postId = params.postId;

    if (!boardId || !postId || Array.isArray(boardId) || Array.isArray(postId)) {
        console.log(boardId, postId);
        return <p>잘못된 요청입니다.</p>;
    }

    return(
        <div>
            <PostDetails boardId={Number(boardId)} postId={Number(postId)} />
        </div>
    );
};

export default PostPage;
