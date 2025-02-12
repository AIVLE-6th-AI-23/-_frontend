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
  height: "300px",
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

export const descriptionField_post = style({
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
  height: "65%", 
});

export const multiSelect = style({
  marginBottom: "10px",
  width: "100%",
});

export const datePickerContainer = style({
  marginBottom: '6px',
  display:"flex",
  flexGrow: 1,
  width:"100%",
});

export const datePickerContainerLabel = style({
  fontSize: '14px',
  color: '#333',
});

export const datePickerContainerInput = style({
  padding: '8px',
  fontSize: '16px',
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
  marginLeft: 'auto',
  position: 'absolute',
  right: '24px',
  alignItems: "center",
});


export const createButton = style({
  backgroundColor: "transparent", 
  border: "none", 
  padding: 0, 
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

export const editButton = style({
  fontFamily: 'var(--font-my-font), sans-serif',
  backgroundColor: '#eee',
  border: 'none',
  padding: '0.5rem',
  fontSize: '1rem',
  width: '4em',
  borderRadius: '1rem',
  color: colors.department,
  boxShadow: '0 0.4rem #dfd9d9',
  cursor: 'pointer',
  selectors: {
    '&:active': {
      color: 'white',
      boxShadow: '0 0.2rem #dfd9d9',
      transform: 'translateY(0.2rem)',
    },
    '&:hover:not(:disabled)': {
      backgroundColor:colors.department,
      color: 'white',
      textShadow: '0 0.1rem #bcb4b4',
    },
    '&:disabled': {
      cursor: 'auto',
      color: 'grey',
    },
  },
});


export const deleteButton = style({
  fontFamily: 'var(--font-my-font), sans-serif',
  backgroundColor: '#eee',
  border: 'none',
  padding: '1px',
  fontSize: '1rem',
  width: '4em',
  borderRadius: '1rem',
  color: 'lightcoral',
  boxShadow: '0 0.4rem #dfd9d9',
  cursor: 'pointer',
  selectors: {
    '&:active': {
      color: 'white',
      boxShadow: '0 0.2rem #dfd9d9',
      transform: 'translateY(0.2rem)',
    },
    '&:hover:not(:disabled)': {
      background: 'lightcoral',
      color: 'white',
      textShadow: '0 0.1rem #bcb4b4',
    },
    '&:disabled': {
      cursor: 'auto',
      color: 'grey',
    },
  },
});


//DeleteModal css

export const modalOverlayDelete = style({
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
});

export const card = style({
  overflow: "hidden",
  position: "relative",
  backgroundColor: "#ffffff",
  textAlign: "left",
  borderRadius: "0.5rem",
  maxWidth: "290px",
  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
});

export const header = style({
  padding: "1.25rem 1rem 1rem 1rem",
  backgroundColor: "#ffffff",
});

export const image = style({
  display: "flex",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "#fee2e2",
  flexShrink: 0,
  justifyContent: "center",
  alignItems: "center",
  width: "3rem",
  height: "3rem",
  borderRadius: "9999px",
});

export const imageSvg = style({
  color: "#dc2626",
  width: "1.5rem",
  height: "1.5rem",
});

export const content = style({
  marginTop: "0.75rem",
  textAlign: "center",
});

export const title = style({
  color: "#111827",
  fontSize: "1rem",
  fontWeight: "600",
  lineHeight: "1.5rem",
});

export const message = style({
  marginTop: "0.5rem",
  color: "#6b7280",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
});

export const actions = style({
  margin: "0.75rem 1rem",
  backgroundColor: "#f9fafb",
});

export const desactivate = style({
  display: "inline-flex",
  padding: "0.5rem 1rem",
  backgroundColor: "#dc2626",
  color: "#ffffff",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  fontWeight: "500",
  justifyContent: "center",
  width: "100%",
  borderRadius: "0.375rem",
  borderWidth: "1px",
  borderColor: "transparent",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
});

export const cancel = style({
  display: "inline-flex",
  marginTop: "0.75rem",
  padding: "0.5rem 1rem",
  backgroundColor: "#ffffff",
  color: "#374151",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  fontWeight: "500",
  justifyContent: "center",
  width: "100%",
  borderRadius: "0.375rem",
  border: "1px solid #d1d5db",
  boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
});