"use client"; // 클라이언트 컴포넌트임을 명시
import styles from "@/styles/error_404.module.css";
import type { JSX } from "react";


export default function Error404(): JSX.Element {
  return (
    <div className={styles.container}>
      <img
        src="/images/error_404/curious_mouse.png" // 이미지 경로 확인 필요
        alt="Curious Mouse"
        className={styles.errorImage}
      />
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.description}>Oops! 페이지가 존재하지 않습니다.</p>
      <a href="/home" className={styles.backButton}>
        홈으로 돌아가기
      </a>
    </div>
  );
}