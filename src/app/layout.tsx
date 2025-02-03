import "@/styles/globals.css"; // 글로벌 CSS 경로
import Header from "@/components/header"; // 공통 헤더 컴포넌트
import type { JSX } from "react";

export const metadata = {
  title: "Hate Speech Prevention",
  description: "Identify and prevent hate speech in everyday life.",
  icons: {
    icon: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <head>
        {/* Next.js에서 메타데이터는 자동으로 처리됩니다 */}
      </head>
      <body>
        {/* 헤더 스타일을 유지하고 컴포넌트로 캡슐화 */}
        <header className="header">
          <a href="/home" className="logo-container">
            <img
              src="/images/global/Nero_logo1.png"
              alt="NERO Logo"
              className="logo"
            />
          </a>
        </header>
        {/* 페이지 내용 */}
        {children}
      </body>
    </html>
  );
}
