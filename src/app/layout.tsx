import "@/styles/globals.css"; // 글로벌 CSS
import type { JSX } from "react";
import Link from "next/link";
import Header from "@/components/header";


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
        {/* 헤더 */}
        <Header userName={"a"} profileImg={"a"} />

        {/* 페이지 내용 */}
        {children}
      </body>
    </html>
  );
}
