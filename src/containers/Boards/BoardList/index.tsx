import { useMutation, useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { fetchBoards, updateBoard } from "@/services/board"; // ✅ updateBoard 추가
import { Board, Boards, BoardRequest } from "@/types/types";
import InfiniteScrollList from "@/components/InfiniteScrollList";
import { usePathname, useRouter } from "next/navigation";
import * as styles from "./boardList.css";
import EditBoardButton from "@/components/BoardActionButtons/Edit";
import DeleteBoardButton from "@/components/BoardActionButtons/Delete";
import { useEffect, useState } from "react";
import CreateBoardModal from "@/components/BoardActionButtons/CreateModal";
import { DepartmentOptions } from "@/constants/constants";

interface BoardListProps {
  boardStatus: string;
}

const BoardList: React.FC<BoardListProps> = ({ boardStatus }) => {
  const pathName = usePathname();
  const router = useRouter();
  const queryClient = useQueryClient();

  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);
  const [isEditing, setIsEditing] = useState(false);


  const { data, fetchNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["boards", boardStatus],
    queryFn: ({ pageParam }: { pageParam?: string | null }) =>
      fetchBoards({ pageParam, status: boardStatus }),
    getNextPageParam: (lastPage: Boards) =>
      lastPage.length > 0 ? lastPage[lastPage.length - 1].createdAt : null,
    initialPageParam: null,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const updateMutation = useMutation({
    mutationFn: (updatedData: BoardRequest) =>
      updateBoard({ boardId: selectedBoard!.boardId, boardData: updatedData }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["boards", boardStatus] }); // 목록 새로고침
      setIsEditing(false); 
    },
    onError: (error: any) => alert(`게시판 수정 실패: ${error.message}`),
  });

  const handleBoardClick = (boardId: number) => {
    router.push(`${pathName}/${boardId}/posts`);
  };

  const handleEditClick = (board: Board) => {
    setSelectedBoard(board);
    setIsEditing(true);
  };

  const handleSave = (boardTitle: string, description: string, deptIds: string[], endDate: string | null) => {
    if (!selectedBoard) return;

    updateMutation.mutate({
      boardTitle,
      description,
      endDate,
      deptIds,
    });
  };

  useEffect(() => {
    if (status === "error") {
      queryClient.resetQueries({ queryKey: ["boards", boardStatus] });
      throw new Error();
    }
  }, [status, queryClient]);

  return (
    
    <div className={styles.boardListBody}>
      {isEditing && selectedBoard && (
        <CreateBoardModal
          isOpen={isEditing}
          onClose={() => setIsEditing(false)}
          onSave={handleSave}
          initialData={{
            boardTitle: selectedBoard.boardTitle,
            description: selectedBoard.description,
            deptIds: selectedBoard.deptIds,
            endDate:selectedBoard.endDate,
          }}
        />      
      )}

      {/* 게시판 리스트 */}
      <div className={styles.boardListContainer}>
      <InfiniteScrollList
      data={data?.pages.flatMap((page: Boards) => page) || []}
      renderItem={(board: Board) => (
        <div
          key={board.boardId}
          className={styles.boardItem}
          onClick={() => handleBoardClick(board.boardId)}
          style={{ cursor: "pointer" }}
        >
          <div className={styles.buttonAndBoardWrapper}>
            <div className={styles.boardActions}>
              <div className={styles.buttonContainer}>
                <EditBoardButton onEdit={() => handleEditClick(board)} />
                <DeleteBoardButton boardId={board.boardId} />
              </div>
            </div>

            <div className={styles.boardWrapper}>
              <h3 className={styles.boardTitle}>{board.boardTitle}</h3>
              <p className={styles.boardDescription}>{board.description}</p>
            </div>

            {board.deptIds && board.deptIds.length > 0 ? (
              <div className={styles.boardDepts}>
                {board.deptIds.map((id) => {
                  const label = DepartmentOptions.find((dept) => dept.value === id)?.label || id;
                  return <div className = {styles.boardDpetLabels}key={id}>{label}</div>;
                })}
              </div>
            ) : (
              <p>No departments available</p>
            )}
            <div className={styles.boardFooter}>
              <div className={styles.boardPeriod}>
                <p>{new Date(board.createdAt).toLocaleDateString()} ~ {board.endDate ? new Date(board.endDate).toLocaleTimeString() : ""} </p>
              </div>
            </div>
          </div>
        </div>
      )}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  </div>
  </div>
);
};

export default BoardList;
