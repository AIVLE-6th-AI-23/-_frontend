import Link from "next/link";
import * as styles from '@/styles/not-found.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
        <img
            src="/images/error/curious_mouse.png" // 이미지 경로 확인 필요
            alt="Curious Mouse"
            className={styles.errorImage}
        />
        <h1 className={styles.title}>404 - 페이지를 찾을 수 없습니다.</h1>
        <p className={styles.description}>Oops! 페이지가 존재하지 않습니다.</p>
        <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}
