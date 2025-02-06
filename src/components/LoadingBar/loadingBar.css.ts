import { style } from "@vanilla-extract/css";

export const loadingOverlay = style({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)", // 중앙 정렬
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.6)", // 반투명한 배경
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
});

export const loadingContent = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transform: "translateY(-10%)"
});

export const loadingGif = style({
  width: "400px",
  height: "auto",
  display: "block",
});

export const loadingText = style({
  transform: "translateY(-500%)",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#fff",
  display: "inline-block",
});
