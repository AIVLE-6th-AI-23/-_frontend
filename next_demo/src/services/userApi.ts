// src/services/userApi.ts
import apiClient from "./api";

// 회원가입 요청
export async function signup(credentials: {
  employeeId: string;
  userName: string;
  email: string;
  password: string;
  deptId: number;
}): Promise<void> {
  const response = await apiClient.post("/api/user/signup", credentials);
  return response.data;
}

// 로그인 요청
export async function login(credentials: { employeeId: string; password: string }): Promise<void> {
  const response = await apiClient.post("/api/user/login", credentials);
  return response.data;
}

// 사용자 정보 가져오기 (세션 기반)
export async function getUserInfo(): Promise<any> {
  const response = await apiClient.get("/api/user/info");
  return response.data;
}

// 로그아웃 요청
export async function logout(): Promise<void> {
  const response = await apiClient.post("/api/user/logout");
  return response.data;
}