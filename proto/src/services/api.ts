import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ApiResponse<T> {
    success : boolean;
    message : string;
    data : T;
}