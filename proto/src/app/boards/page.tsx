"use client";

import React from 'react';
import BoardList from '@/containers/Boards';

const BoardPage: React.FC = () => {
    return (
        <div>
            <h1>Boards</h1>
            <BoardList />
        </div>
    );
};

export default BoardPage;
