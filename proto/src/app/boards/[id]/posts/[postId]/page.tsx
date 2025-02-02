"use client";

import React from "react";
import { useParams } from "next/navigation";
import { PostDetails } from "@/containers/Posts";
import ContentAnalysis from "@/containers/ContentAnalysis";

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
            <ContentAnalysis postId={Number(boardId)} />
        </div>
    );
};

export default PostPage;
