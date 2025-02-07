import { style } from "@vanilla-extract/css";

export const userProfile = style({
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  });
  
  export const userName = style({
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
  });
  
  export const profilePic = style({
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ccc',
    transition: 'border-color 0.3s',
    ':hover': {
      borderColor: '#007bff',
    },
  });
  
  export const logoutButton = style({
    padding: '8px 12px',
    fontSize: '0.9rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: '#dc3545',
    color: 'white',
    transition: 'all 0.3s ease-in-out',
    ':hover': {
      transform: 'scale(1.05)',
      opacity: 0.9,
    },
  });
  
  export const loginButton = style({
    padding: '8px 12px',
    fontSize: '0.9rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    backgroundColor: '#007bff',
    color: 'white',
    transition: 'all 0.3s ease-in-out',
    ':hover': {
      transform: 'scale(1.05)',
      opacity: 0.9,
    },
  });