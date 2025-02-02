"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { PostList } from '@/containers/Posts';

const PostPage: React.FC = () => {
    const { id } = useParams();

    if (!id || Array.isArray(id)) {
        return <p>올바르지 않은 요청입니다.</p>;
    }

    return (
        <div>
            <h1>Board {id} Posts</h1>
            <PostList boardId={Number(id)} />
        </div>
    );
};

export default PostPage;
