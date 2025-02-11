"use client";

import React from 'react';
import { useParams , useSearchParams } from 'next/navigation';
import PostsPage from '@/containers/Posts';


const PostPage: React.FC = () => {
    const { id } = useParams();
    const searchParams = useSearchParams();
    const boardTitle = decodeURIComponent(searchParams.get('title') || ''); // URL에서 title 파라미터 디코딩

    if (!id || Array.isArray(id)) {
        return <p>올바르지 않은 요청입니다.</p>;
    }

    return (
        <PostsPage boardId={Number(id)} boardTitle={String(boardTitle)} />
    );
};

export default PostPage;
