"use client"; // 클라이언트 컴포넌트임을 명시

import { useState, useEffect, useRef } from "react";
import styles from "./home.module.css";

export default function Home() {
  const [likes, setLikes] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [infoPosition, setInfoPosition] = useState({ top: 0, left: 0 }); // 정보 창 위치 상태
  const infoButtonRef = useRef(null); // 🛈 버튼 참조

  // 페이지 로드 시 LocalStorage에서 상태를 복원
  useEffect(() => {
    const savedLikes = localStorage.getItem("likes");
    if (savedLikes) {
      setLikes(parseInt(savedLikes, 10)); // 문자열을 숫자로 변환
    }
  }, []);

  // 상태 변경 시 LocalStorage에 저장
  useEffect(() => {
    localStorage.setItem("likes", likes);
  }, [likes]);

  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1); // 좋아요 증가
  };

  const toggleInfo = () => {
    if (infoButtonRef.current) {
      const rect = infoButtonRef.current.getBoundingClientRect(); // 버튼의 위치 정보 가져오기
      setInfoPosition({
        top: rect.bottom + window.scrollY + 10, // 버튼 아래로 10px
        left: rect.left + rect.width / 2 - 150, // 버튼 중심에 맞춤 (창 너비 고려)
      });
    }
    setShowInfo((prev) => !prev); // 정보 창 표시 여부 토글
  };

  const closeInfo = () => {
    setShowInfo(false); // 정보 창 닫기
  };

  return (
    <div className={styles.container}>
      <button className={styles.logoButton}>
        <img
          src="/Nero.png"
          alt="Hate Speech Prevention Logo"
          className={styles.logo}
        />
      </button>
      <h1 className={styles.title}>
        <span className={styles.highlight}>N</span>evigate{" "}
        <span className={styles.highlight}>E</span>xpressions,{" "}
        <span className={styles.highlight}>R</span>each{" "}
        <span className={styles.highlight}>O</span>utcomes
      </h1>
      <div className={styles.icons}>
        <span>📁</span>
        <span>🔤</span>
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
            style={{ top: infoPosition.top, left: infoPosition.left }} // 동적 위치 설정
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
