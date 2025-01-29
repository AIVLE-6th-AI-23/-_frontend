import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BE_URL,
  timeout: 10000,
  withCredentials: true,
});

// 요청 인터셉터
apiClient.interceptors.request.use(
  (config) => {
    console.log("Request sent to:", config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 인증 에러 처리
      alert("세션이 만료되었습니다. 다시 로그인해주세요.");
      window.location.href = "/auth"; // 로그인 페이지로 리디렉션
    }
    return Promise.reject(error);
  }
);

export default apiClient;
