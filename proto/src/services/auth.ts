import { api } from './api';

export const login = async (employeeId: string, password: string) => {
    return api.post('/api/user/login', {employeeId, password});
}

export const logout = async () => {
    return api.post('/api/user/logout');
}