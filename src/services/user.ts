import { UserResponse, UserInfoRequest } from '@/types/types';
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

export const signup = async (
    user: UserInfoRequest
): Promise<string> => {
    const response = await api.post<ApiResponse<string>>('/api/user/signup', user);
    return response.data.data;
};

export const updateUserInfo = async (
    user: UserInfoRequest
): Promise<string> => {
    const response = await api.post<ApiResponse<string>>('/api/user/update', user);
    return response.data.data;
};


