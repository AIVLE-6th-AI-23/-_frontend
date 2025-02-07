import { style } from "@vanilla-extract/css";
import { colors } from "./colors.css";

export const container = style({
  margin: 0,
  padding: 0,
  fontFamily: `"Roboto", Arial, sans-serif`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
  background: `linear-gradient(${colors.background})`,
  textAlign: "center",
  fontWeight: "bold",
});

export const errorImage = style({
  width: "300px",
  height: "auto",
  marginBottom: "20px",
  borderRadius: "10px",
});

export const title = style({
  fontSize: "2.5rem",
  color: colors.text,
  marginBottom: "20px",
});

export const description = style({
  fontSize: "1.2rem",
  color: colors.edit,
  marginBottom: "30px",
});

export const backButton = style({
  padding: "15px 30px",
  fontSize: "2rem",
  color: "white",
  background: colors.primary,
  border: "none",
  borderRadius: "50px",
  cursor: "pointer",
  textDecoration: "none",
  transition: "background 0.3s, transform 0.2s",
  ":hover": {
    background: colors.border,
    transform: "scale(1.05)",
  },
});

export const resetButton = style({
    marginTop: "15px",
    padding: "15px 30px",
    fontSize: "2rem",
    color: "white",
    background: colors.tertiary,
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "background 0.3s, transform 0.2s",
    ":hover": {
      background: colors.border,
      transform: "scale(1.05)",
    },
  });