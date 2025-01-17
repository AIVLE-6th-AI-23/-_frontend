"use client"; // 클라이언트 컴포넌트임을 명시
import styles from "./error_503.module.css";

export default function Error503() {
  return (
    <div className={styles.container}>
      <img
        src="/coughing_mouse.webp"
        alt="Coughing Mouse"
        className={styles.errorImage}
      />
      <h1 className={styles.title}>503 - Server Unavailable</h1>
      <p className={styles.description}>서버가 아파요. 나중에 다시 시도해주세요.</p>
      <a href="http://localhost:3000/home" className={styles.backButton}>
        홈으로 돌아가기
      </a>
    </div>
  );
}