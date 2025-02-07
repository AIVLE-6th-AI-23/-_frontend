import { AxiosHeaderValue } from "axios";

export function getCsrfToken(): AxiosHeaderValue | undefined {
  if (typeof document === "undefined") return undefined; // 서버 환경에서는 실행되지 않도록 방지

  const match = document.cookie.match(new RegExp("(^| )XSRF-TOKEN=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : undefined;
}
