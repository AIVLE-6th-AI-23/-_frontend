"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import * as styles from "./home.css"; // ✅ vanilla-extract 스타일 import
import type { JSX } from "react";

export default function Home(): JSX.Element {
  const [likes, setLikes] = useState<number>(0);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [infoPosition, setInfoPosition] = useState<{ top: number; left: number }>(
    { top: 0, left: 0 }
  );

  const infoButtonRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const savedLikes = localStorage.getItem("likes");
    if (savedLikes !== null) {
      setLikes(parseInt(savedLikes, 10));
    }
  }, []);

  useEffect(() => {
    const syncLikes = (event: StorageEvent) => {
      if (event.key === "likes") {
        setLikes(parseInt(event.newValue || "0", 10));
      }
    };

    window.addEventListener("storage", syncLikes);
    return () => window.removeEventListener("storage", syncLikes);
  }, []);

  useEffect(() => {
    localStorage.setItem("likes", likes.toString());
  }, [likes]);

  const handleLike = (): void => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  const toggleInfo = (): void => {
    if (infoButtonRef.current) {
      const rect = infoButtonRef.current.getBoundingClientRect();
      setInfoPosition({
        top: rect.bottom + window.scrollY + 10,
        left: rect.left + rect.width / 2 - 150,
      });
    }
    setShowInfo((prev) => !prev);
  };

  const closeInfo = (): void => {
    setShowInfo(false);
  };

  return (
    <div className={styles.container}>
      <Link href="/boards">
        <button className={styles.logoButton}>
          <img
            src="/images/nero.png"
            alt="Hate Speech Prevention Logo"
            className={styles.logo}
          />
        </button>
      </Link>
      <h1 className={styles.title}>
        <span className={styles.highlight}>N</span>evigate{" "}
        <span className={styles.highlight}>E</span>xpressions,{" "}
        <span className={styles.highlight}>R</span>each{" "}
        <span className={styles.highlight}>O</span>utcomes
      </h1>
      <div className={styles.icons}>
        <span>
          <Link href="/boards" style={{ textDecoration: "none" }}>📁</Link>
        </span>

        <span>🖼️</span>
        <span className={styles.infoIcon} onClick={toggleInfo} ref={infoButtonRef}>
          🛈
        </span>
        <span onClick={handleLike} className={styles.likeIcon}>
          ❤ {likes}
        </span>
      </div>

      {showInfo && (
        <>
          <div className={styles.overlay} onClick={closeInfo}></div>

          <div className={styles.infoBox} style={{ top: infoPosition.top, left: infoPosition.left }}>
            <h2>About NERO</h2>
            <p>
              NERO는 콘텐츠나 문서에 포함될 수도 있는 혐오 표현을 찾아 조언해주는 서비스입니다.
              <br />
              위 로고를 클릭하고 원하는 콘텐츠를 업로드하여 브랜드 가치를 지키세요.
            </p>
            <button className={styles.closeButton} onClick={closeInfo}>Close</button>
          </div>
        </>
      )}
    </div>
  );
}
