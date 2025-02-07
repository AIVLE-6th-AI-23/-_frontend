"use client";

import Image from "next/image";
import * as styles from "./loadingBar.css";

const GlobalLoadingBar: React.FC = () => {

  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingContent}>
        <img
          src="/images/layout/cat-running1.gif"
          alt="로딩 중..."
          className={styles.loadingGif}
        />
        <p className={styles.loadingText}>로딩 중...</p>
      </div>
    </div>
  );
};

export default GlobalLoadingBar;
