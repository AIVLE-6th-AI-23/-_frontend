import { UserResponse } from '@/types/types';
import { api, ApiResponse } from './api';

export const login = async ({
    employeeId,
    password,
}: { employeeId: string; password: string }): Promise<UserResponse> => {
    const response = await api.post<ApiResponse<UserResponse>>('/api/user/login', {
        employeeId,
        password,
    });
    return response.data.data;
};

export const logout = async () => {
    return api.post('/api/user/logout');
}

export const sessionCheck = async () : Promise<UserResponse | null> => {
    const response = await api.get<ApiResponse<UserResponse>>('/api/user/profile');
    return response.data.data;
};