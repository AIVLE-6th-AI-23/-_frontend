"use client";

import Link from "next/link";
import * as styles from '@/styles/error.css'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className={styles.container}>
      <img
        src="/images/error/coughing_mouse.png"
        alt="Curious Mouse"
        className={styles.errorImage}
      />
      <h1 className={styles.title}>{error.name} {error.message}</h1>
      <p className={styles.description}>서버가 아파요. 나중에 다시 시도해주세요..</p>
      <Link href="/" className={styles.backButton}>
        홈으로 돌아가기
      </Link>
      <button onClick={reset} className={styles.resetButton}>
        다시 시도하기
      </button> 
    </div>
  );
}
