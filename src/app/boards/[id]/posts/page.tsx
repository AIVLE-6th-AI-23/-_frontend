"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Project from '@/containers/Project';


const PostPage: React.FC = () => {
    const { id } = useParams();

    if (!id || Array.isArray(id)) {
        return <p>올바르지 않은 요청입니다.</p>;
    }

    return (
        <Project boardId={Number(id)} />
    );
};

export default PostPage;
