import { style } from "@vanilla-extract/css";
import { colors } from "@/styles/colors.css";

export const modalOverlay = style({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)", 
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000, 
});

export const modalContent = style({
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "400px",
  height: "260px",
  maxWidth: "90%",
  maxHeight: "90%",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  position: "relative",
});

export const modalActions = style({
  display: "flex",
  justifyContent: "space-between",
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


export const inputField = style({
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
});

export const descriptionField = style({
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  height: "120px", 
});

export const multiSelect = style({
  marginBottom: "10px",
  width: "100%",
});

export const saveButton = style({
  backgroundColor: "#4CAF50",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "4px",
  cursor: "pointer",
});

export const cancelButton = style({
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "4px",
  cursor: "pointer",
});

export const createContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});


export const createButton = style({
  backgroundColor: "transparent", 
  border: "none", 
  padding: 0, 
  display: "flex", 
  cursor: "pointer",
});

export const createButtonImage = style({
  width: "35px",
  height: "35px",
  objectFit: "contain",
  backgroundColor: "transparent", 
  border: "none", 

  ":hover": {
    transform: "scale(1.1)", 
    transition: "transform 0.2s ease, background-color 0.2s ease", 
  },

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
  width: "25px",
  height: "25px", 
  // backgroundColor: colors.edit, 
  border: "none", 
  padding: 0, 
  display: "flex", 
  cursor: "pointer",
});

export const editButtonImage = style({
  width: "20px",
  height: "20px", 
  objectFit: "contain", 
  backgroundColor: "transparent", 
  border: "none", 

  ":hover": {
    transform: "scale(1.2)", // 마우스 오버 시 조금 더 크게
    transition: "transform 0.2s ease, background-color 0.2s ease", 
  },
});

export const deleteButton = style({
  width: "25px",
  height: "25px", 
  backgroundColor: "transparent",
  border: "none", 
  paddingTop: 3, 
  display: "flex", 
  cursor: "pointer",
});

export const deleteButtonImage = style({
  width: "23px",
  height: "23px", 
  objectFit: "contain", 
  backgroundColor: "transparent",
  border: "none", 

  ":hover": {
    transform: "scale(1.2)", // 마우스 오버 시 조금 더 크게
    transition: "transform 0.2s ease, background-color 0.2s ease", 
  },
});
