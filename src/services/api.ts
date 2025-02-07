import axios from "axios";
import { getCsrfToken } from "@/utils/csrf";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});


const CSRFProtection = Boolean(process.env.NEXT_PUBLIC_CSRF_PROTECTION); 

if(CSRFProtection){
  api.interceptors.request.use(
    (config) => {
      const csrfToken = getCsrfToken();
      if (csrfToken) {
        config.headers["X-CSRF-TOKEN"] = csrfToken;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
}

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("❌ API 요청 오류:", error);

    if (axios.isAxiosError(error) && error.code === "ECONNABORTED") {
      throw new Error("⏳ 요청 시간이 초과되었습니다. 다시 시도해주세요.");
    }

    if (error.response?.status >= 500) {
      throw new Error("❌ 서버 오류가 발생했습니다.");
    }
    
    throw new Error(`unexpected error ${error}`)
  }
);

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
