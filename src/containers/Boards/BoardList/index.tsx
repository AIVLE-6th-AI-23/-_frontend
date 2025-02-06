import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchBoards } from '@/services/board';
import { Board, Boards } from '@/types/types';
import InfiniteScrollList from '@/components/InfiniteScrollList';
import { usePathname, useRouter } from 'next/navigation';
import * as styles from '../boards.css'
import EditBoardButton from '../BoardActionButtons/Edit';
import DeleteBoardButton from '../BoardActionButtons/Delete';
import CreateBoard from '../BoardActionButtons/Create';
import GlobalLoadingBar from '@/components/LoadingBar';


interface BoardListProps {
    boardStatus : string
}

const BoardList: React.FC<BoardListProps> = ( { boardStatus } ) => {
    const pathName = usePathname();
    const router = useRouter();

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    status
  } = useInfiniteQuery({
    queryKey: ["boards", boardStatus], // ✅ 상태별 캐싱 방지
    queryFn: ({ pageParam }: { pageParam?: string | null }) => fetchBoards({ pageParam, status: boardStatus }),
    getNextPageParam: (lastPage: Boards) =>
      lastPage.length > 0 ? lastPage[lastPage.length - 1].createdAt : null,
    initialPageParam: null,
    refetchOnWindowFocus: false,
    retry: false,
  });

    const handleBoardClick = (boardId : number) => {
        router.push(`${pathName}/${boardId}/posts`);
    }
    // if (isLoading) return <p>로딩 중...</p>;
    // if (status === 'error') return <p>게시판을 불러오지 못했습니다.</p>;

    // if (!data || !data.pages) return null;

    return (
        
        <div className={styles.boardListContainer}>
            {isLoading && <GlobalLoadingBar />}
            <CreateBoard />
            <InfiniteScrollList
                data={data?.pages.flatMap((page : Boards) => page) || []}
                renderItem={(board: Board) => (
                    <li key={board.boardId} className={styles.boardItem}
                        onClick={() => handleBoardClick(board.boardId)}
                        style={{cursor: 'pointer'}}>
                        <div className={styles.boardWrapper}>
                          <h3 className={styles.boardTitle}>{board.boardTitle}</h3>
                          <p className={styles.boardDescription}>{board.description}</p>
                          
                          <EditBoardButton board={board} />
                          <DeleteBoardButton boardId={board.boardId} />
                        </div>
                    </li>
                )}
                fetchNextPage={fetchNextPage}
                isFetchingNextPage={isFetchingNextPage}
            />
        </div>
    );
};

export default BoardList;
