"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link"; // ✅ Link 추가
import Header from "@/components/header";
import styles from "@/styles/home.module.css";
import type { JSX } from "react";

export default function Home(): JSX.Element {
  const [likes, setLikes] = useState<number>(0);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [infoPosition, setInfoPosition] = useState<{ top: number; left: number }>(
    { top: 0, left: 0 }
  );

  const infoButtonRef = useRef<HTMLSpanElement | null>(null); // 🛈 버튼 참조

  // ✅ LocalStorage에서 likes 값 불러오기 (최초 1회 실행)
  useEffect(() => {
    const savedLikes = localStorage.getItem("likes");
    if (savedLikes !== null) {
      setLikes(parseInt(savedLikes, 10)); // 문자열을 숫자로 변환하여 저장
    }
  }, []);

  // ✅ 다른 창에서도 likes 값 유지하도록 이벤트 리스너 추가
  useEffect(() => {
    const syncLikes = (event: StorageEvent) => {
      if (event.key === "likes") {
        setLikes(parseInt(event.newValue || "0", 10)); // 다른 창에서 변경된 값 동기화
      }
    };

    window.addEventListener("storage", syncLikes);
    return () => window.removeEventListener("storage", syncLikes); // 클린업
  }, []);

  // ✅ 좋아요 수 변경될 때마다 LocalStorage 업데이트
  useEffect(() => {
    localStorage.setItem("likes", likes.toString());
  }, [likes]);

  // 좋아요 증가 함수
  const handleLike = (): void => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  // 정보 토글 함수
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
      <Link href="/project">
        <button className={styles.logoButton}>
          <img
            src="/images/home/nero.png"
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
          <Link href="/board" style={{ textDecoration: "none" }}>
            📁
          </Link>
        </span>

        <span>🖼️</span>
        <span
          className={styles.infoIcon}
          onClick={toggleInfo}
          ref={infoButtonRef}
        >
          🛈
        </span>
        <span onClick={handleLike} className={styles.likeIcon}>
          ❤ {likes}
        </span>
      </div>

      {/* 오버레이 및 정보 창 */}
      {showInfo && (
        <>
          {/* 오버레이 */}
          <div className={styles.overlay} onClick={closeInfo}></div>

          {/* 정보 창 */}
          <div
            className={styles.infoBox}
            style={{ top: infoPosition.top, left: infoPosition.left }}
          >
            <h2>About NERO</h2>
            <p>
              NERO 는 컨텐츠나 문서에 포함될 수도 있는 혐오표현을 찾아 조언해주는
              서비스입니다.
              <br />
              위 로고를 클릭하고 원하는 컨텐츠를 업로드하여 브랜드 가치를
              지키세요.
            </p>
            <button className={styles.closeButton} onClick={closeInfo}>
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}
