"use client";

import { useState } from "react";
import styles from "@/styles/post2.module.css";

export default function Analysis() {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("제목을 입력하세요");
  const [description, setDescription] = useState("내용을 입력하세요");
  const [tempTitle, setTempTitle] = useState(title);
  const [tempDescription, setTempDescription] = useState(description);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("선택된 파일 없음");
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // 🔥 로딩 상태 추가

  const handleEdit = () => {
    setTempTitle(title === "제목을 입력하세요" ? "" : title); // 🔥 제목이 기본값이면 빈칸
    setTempDescription(description === "내용을 입력하세요" ? "" : description); // 🔥 내용이 기본값이면 빈칸
    setIsEditing(true);
  };
  
  const handleSave = () => {
    if (tempTitle.trim() === "" || tempDescription.trim() === "") {
      alert("제목과 설명은 빈 값일 수 없습니다.");
      return;
    }
    setTitle(tempTitle);
    setDescription(tempDescription);
    setIsEditing(false);
  };
  const handleCancel = () => {
    setTempTitle(title);
    setTempDescription(description);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (confirm("정말로 삭제하시겠습니까?")) {
      setTitle("");
      setDescription("");
      alert("삭제되었습니다.");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setFilePreview(reader.result as string);
      reader.readAsDataURL(file);
      setFileName(file.name);
      setIsFileSelected(true);
    }
  };

  const handleStartAnalysis = () => {
    setIsLoading(true); // 🔥 분석 시작 시 로딩 시작
    setTimeout(() => {
      setIsLoading(false); // 3초 후 로딩 해제
      alert("분석이 완료되었습니다!");
    }, 3000);
  };

  const handleCancelAnalysis = () => {
    setFilePreview(null);
    setFileName("선택된 파일 없음");
    setIsFileSelected(false);
  };

  return (
    <div className={styles.container}>
      {/* 🔥 로딩 애니메이션 */}
      {isLoading && (
        <div className={styles.loadingOverlay}>
          <img
            src="/images/post/cat-running1.gif"
            alt="로딩 중..."
            className={styles.loadingGif}
          />
          <span>로딩 중
          </span>
        </div>
      )}

      {/* 좌측 상단: 설명 박스 */}
      <div className={styles.titleBox}>
        <div className={styles.iconButtons}>
          <img
            src="/images/post/edit.png"
            alt="수정"
            className={styles.icon}
            onClick={handleEdit}
          />
          <img
            src="/images/post/remove.png"
            alt="삭제"
            className={styles.icon}
            onClick={handleDelete}
          />
        </div>
        <div className={styles.analysisSection}>
          {isEditing ? (
            <>
              <input
                type="text"
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                className={`${styles.editInput} ${styles.titleInput}`}
                placeholder="제목 입력"
                maxLength={20}
              />
              <textarea
                value={tempDescription}
                onChange={(e) => setTempDescription(e.target.value)}
                className={`${styles.editInput} ${styles.descriptionInput}`}
                placeholder="내용 입력"
                maxLength={500}
              />
              <div className={styles.buttonContainer}>
                <button
                  className={`${styles.button} ${styles.saveButton}`}
                  onClick={handleSave}
                >
                  저장
                </button>
                <button
                  className={`${styles.button} ${styles.cancelButton}`}
                  onClick={handleCancel}
                >
                  취소
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.subtitle}>{description}</p>
            </>
          )}
        </div>
      </div>

      {/* 우측 상단: 파일 업로드 섹션 */}
      <div className={styles.uploadSection}>
        <img
          src={filePreview || "/placeholder-image.png"}
          alt="파일을 선택하세요"
          className={styles.placeholder}
        />
        <div>
          <label htmlFor="fileUpload" className={styles.fileLabel}>
            파일 선택
          </label>
          <input
            type="file"
            id="fileUpload"
            className={styles.fileInput}
            accept="image/*"
            onChange={handleFileChange}
          />
          <span className={styles.fileName}>{fileName}</span>
        </div>
        {isFileSelected && (
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.button} ${styles.analyzeButton}`}
              onClick={handleStartAnalysis}
            >
              분석 시작
            </button>
            <button
              className={`${styles.button} ${styles.cancelButton}`}
              onClick={handleCancelAnalysis}
            >
              취소
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
