"use client"; // 클라이언트 컴포넌트임을 명시
import styles from "./error_404.module.css";

export default function Error404() {
  return (
    <div className={styles.container}>
      <img
        src="/curious_mouse.webp"
        alt="Curious Mouse"
        className={styles.errorImage}
      />
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.description}>Oops! 페이지가 존재하지 않습니다.</p>
      <a href="http://localhost:3000/home" className={styles.backButton}>
        홈으로 돌아가기
      </a>
    </div>
  );
}
