import { FETCH_SIZE } from '@/constants/constants';
import { api, ApiResponse } from './api';
import { Board, BoardRequest, Boards } from '@/types/types';

export const fetchBoards = async ({
    pageParam = null,
    status = null,
}: { pageParam?: string | null, status?: string | null }): Promise<Boards> => {
    const response = await api.get<ApiResponse<Boards>>('/api/boards', {
        params: { cursor: pageParam, size: FETCH_SIZE, status : status}
    });
    return response.data.data;
};

export const createBoard = async ({ boardData }: { boardData: BoardRequest }): Promise<Board> => {
    const response = await api.post<ApiResponse<Board>>(`/api/boards/create`, boardData);
    return response.data.data;
};

export const updateBoard = async ({
    boardId,
    boardData,
}: {
    boardId: number;
    boardData: BoardRequest;
}): Promise<Board> => {
    const response = await api.put<ApiResponse<Board>>(`/api/boards/${boardId}`, boardData);
    return response.data.data;
};

export const deleteBoard = async ({ boardId }: { boardId: number }): Promise<void> => {
    await api.delete<ApiResponse<void>>(`/api/boards/${boardId}`);
};