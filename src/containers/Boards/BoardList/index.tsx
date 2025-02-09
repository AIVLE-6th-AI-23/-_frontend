import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { fetchBoards } from '@/services/board';
import { Board, Boards } from '@/types/types';
import InfiniteScrollList from '@/components/InfiniteScrollList';
import { usePathname, useRouter } from 'next/navigation';
import * as styles from './boardList.css'
import EditBoardButton from '@/components/BoardActionButtons/Edit';
import DeleteBoardButton from '@/components/BoardActionButtons/Delete';
import { useEffect } from 'react';


interface BoardListProps {
    boardStatus : string
}

const BoardList: React.FC<BoardListProps> = ( { boardStatus } ) => {
  const pathName = usePathname();
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    status,
  } = useInfiniteQuery({
    queryKey: ["boards", boardStatus],
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
    
    useEffect(() => {
      if (status === "error") {
        queryClient.resetQueries({ queryKey: ["boards", boardStatus] });
        throw new Error();
      }
    }, [status, queryClient]);

    return (
        
        <div className={styles.boardListContainer}>
            <InfiniteScrollList
                data={data?.pages.flatMap((page : Boards) => page) || []}
                renderItem={(board: Board) => (
                    <div key={board.boardId} className={styles.boardItem}
                        onClick={() => handleBoardClick(board.boardId)}
                        style={{cursor: 'pointer'}}>
                        <div className={styles.boardActions}>
                          <EditBoardButton board={board} />
                          <DeleteBoardButton boardId={board.boardId} />
                        </div>
                        <div className={styles.boardWrapper}>
                          <h3 className={styles.boardTitle}>{board.boardTitle}</h3>
                          <p className={styles.boardDescription}>{board.description}</p>
                        </div>
                    </div>
                )}
                fetchNextPage={fetchNextPage}
                isFetchingNextPage={isFetchingNextPage}
            />
        </div>
    );
};

export default BoardList;
