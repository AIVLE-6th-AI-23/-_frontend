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

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
