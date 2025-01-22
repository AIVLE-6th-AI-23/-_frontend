"use client"; // 클라이언트 컴포넌트임을 명시
import styles from "@/styles/error_503.module.css";
import type { JSX } from "react";


export default function Error503(): JSX.Element {
  return (
    <div className={styles.container}>
      <img
        src="/images/error_503/coughing_mouse.png" // 이미지 경로 확인 필요
        alt="Curious Mouse"
        className={styles.errorImage}
      />
      <h1 className={styles.title}>503 - Server Unavailable</h1>
      <p className={styles.description}>서버가 아파요. 나중에 다시 시도해주세요..</p>
      <a href="/home" className={styles.backButton}>
        홈으로 돌아가기
      </a>
    </div>
  );
}