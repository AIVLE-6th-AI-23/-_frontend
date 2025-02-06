import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#f9f9f9",
  padding: "20px",
});

export const logoButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
});

export const logo = style({
  width: "120px",
  height: "auto",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "bold",
  marginTop: "20px",
  textAlign: "center",
});

export const highlight = style({
  color: "#ff5a5f",
});

export const icons = style({
  display: "flex",
  gap: "20px",
  fontSize: "2rem",
  marginTop: "30px",
  cursor: "pointer",
});

export const infoIcon = style({
  cursor: "pointer",
  ":hover": {
    color: "#555",
  },
});

export const likeIcon = style({
  cursor: "pointer",
  ":hover": {
    transform: "scale(1.1)",
  },
});

export const overlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  zIndex: 10,
});

export const infoBox = style({
  position: "absolute",
  width: "300px",
  padding: "20px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  zIndex: 20,
});

export const closeButton = style({
  display: "block",
  marginTop: "10px",
  padding: "8px 16px",
  backgroundColor: "#ff5a5f",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#e04a50",
  },
});
