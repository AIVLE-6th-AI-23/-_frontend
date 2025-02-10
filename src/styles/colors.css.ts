import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

export const colors = createThemeContract({
  primary: "primary", // 생성 버튼 색상
  primaryHover: "primaryHover",

  secondary: "secondary", // 저장 버튼 색상
  secondaryHover: "secondaryHover",

  tertiary: "tertiary", // 취소 버튼 색상
  tertiaryHover: "tertiaryHover",

  edit: "edit", // 수정 버튼 색상
  editHover: "editHover",

  delete: "delete", // 삭제 버튼 색상
  deleteHover: "deleteHover",
  
  test : "test", // 테스트를 위해 눈에 띄는 색상
  
  department : "department", // Boardlist department 색상상

  background: "background", // 배경 색상

  gridbackground : "gridbackground",
   
  text: "text", // 텍스트 색상
  border: "border", // 입력 필드 테두리
  inputBackground: "inputBackground", // 입력 필드 배경색
});

export const globalTheme = createGlobalTheme(":root", colors, {
  primary: "#4A90E2", // 생성 버튼 (블루)
  primaryHover: "#357ABD",

  secondary: "#6D071A", // 저장 버튼 (버건디)
  secondaryHover: "#540513",

  tertiary: "#8E8E93", // 취소 버튼 (회색)
  tertiaryHover: "#6D6D70",

  edit: "#FFA500", // 수정 버튼 (오렌지)
  editHover: "#CC8400",

  delete: "#D0021B", // 삭제 버튼 (빨강)
  deleteHover: "#A60015",
  
  test : "#9B111E",
  background: "#F5F5F5", // 배경색

  gridbackground:"#B8D0FA",

  department : "#AAD1E7",

  text: "#4A4A4A", // 기본 텍스트 색상
  border: "#ccc", // 입력 필드 테두리
  inputBackground: "#FFFFFF", // 입력 필드 배경색
});
