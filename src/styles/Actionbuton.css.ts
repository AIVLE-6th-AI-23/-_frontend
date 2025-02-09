import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/colors.css";

export const buttonContainer = style({
  display: "flex",
  gap: "8px",
  marginTop: "10px",
});

export const formContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "16px",
  backgroundColor: colors.background,
  borderRadius: "8px",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  maxWidth: "500px",
  width: "100%",
});

export const createContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",
  marginBottom: "20px",
});

export const createForm = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%",
  maxWidth: "400px",
});

export const inputField = style({
    padding: "8px",
    border: `1px solid ${colors.border}`,
    borderRadius: "4px",
    fontSize: "14px",
    width: "100%",
});

export const multiSelect = style({
    width: "100%",
    marginBottom: "10px",
});

export const createButton = style({
  position: 'absolute',
  top: '16px',
  right: '24px',
  backgroundColor: colors.primary,
  color: colors.text,
  padding: "8px 12px",
  borderRadius: "5px",
  cursor: "pointer",
  ":hover": { backgroundColor: colors.primaryHover },
});

export const saveButton = style({
  backgroundColor: colors.secondary,
  color: colors.text,
  padding: "8px 12px",
  borderRadius: "5px",
  cursor: "pointer",
  ":hover": { backgroundColor: colors.secondaryHover },
});

export const cancelButton = style({
  backgroundColor: colors.tertiary,
  color: colors.text,
  padding: "8px 12px",
  borderRadius: "5px",
  cursor: "pointer",
  ":hover": { backgroundColor: colors.tertiaryHover },
});

export const editInput = style({
  padding: "8px",
  border: `1px solid ${colors.border}`,
  borderRadius: "4px",
  fontSize: "14px",
  width: "100%",
  backgroundColor: colors.inputBackground,
});

export const editButton = style({
  backgroundColor: colors.edit,
  color: colors.text,
  padding: "8px 12px",
  borderRadius: "5px",
  zIndex: 30,
  cursor: "pointer",
  ":hover": { backgroundColor: colors.editHover },
});

export const deleteButton = style({
  backgroundColor: colors.delete,
  color: colors.text,
  padding: "8px 12px",
  borderRadius: "5px",
  cursor: "pointer",
  ":hover": { backgroundColor: colors.deleteHover },
});
