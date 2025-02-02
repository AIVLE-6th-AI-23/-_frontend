import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchBoards } from '@/services/board';
import { Board, Boards } from '@/types/types';
import InfiniteScrollList from '@/components/InfiniteScrollList';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BoardList: React.FC = () => {
    const pathName = usePathname();
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery({
        queryKey: ['data'],
        queryFn: ({ pageParam, type } : { pageParam ?: string | null, type ?: string | null }) => fetchBoards({ pageParam, status : type }),
        getNextPageParam: (lastPage : Boards) =>
            lastPage.length > 0 ? lastPage[lastPage.length - 1].createdAt : null,
        initialPageParam: null,
        refetchOnWindowFocus: false,
        retry: 2,
    });

    if (status === 'pending') return <p>로딩 중...</p>;
    if (status === 'error') return <p>게시판을 불러오지 못했습니다.</p>;
    if (!data || !data.pages) return null;

    return (
        <InfiniteScrollList
            data={data?.pages.flatMap((page : Boards) => page) || []}
            renderItem={(board: Board) => (
                <li key={board.boardId}>
                    <Link href={`${pathName}/${board.boardId}/posts`} passHref>
                        <h3>{board.boardTitle}</h3>
                        <p>{board.description}</p>
                    </Link>
                </li>
            )}
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
        />
    );
};

export default BoardList;
