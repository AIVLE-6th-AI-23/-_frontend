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

export const checkId = async (
    userId: string
): Promise<Boolean> => {
    const response = await api.get<ApiResponse<Boolean>>(`/api/user/checkid/${userId}`)
    return response.data.data
}

export const verifyUser = async (userVerifyRequestDto: {
    employeeId: string;
    deptId: string;
    email: string;
}): Promise<boolean> => {
    const response = await api.post<ApiResponse<boolean>>('/api/user/verify', userVerifyRequestDto);
    return response.data.data;
};

export const resetPassword = async (token: string, newPassword: string): Promise<void> => {
    await api.post<ApiResponse<void>>(`/api/user/password/reset?token=${token}`, {
        newPassword: newPassword
    });
};
