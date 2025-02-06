import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'fixed',
  top: 0,
  left: 0,
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '15px 20px',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #ddd',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Arial, sans-serif',
});

export const headerContainer = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
});

export const logo = style({
  display: 'flex',
  alignItems: 'center',
});

export const logoImg = style({
  height: '40px',
  cursor: 'pointer',
  transition: 'transform 0.3s',
  ':hover': {
    transform: 'scale(1.1)',
  },
});

export const navbar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
});

export const navLinks = style({
  display: 'flex',
  listStyle: 'none',
  gap: '20px',
  padding: 0,
  margin: 0,
  fontSize: '1rem',
  fontWeight: 'bold',
});

export const navItem = style({
  textDecoration: 'none',
  color: '#333',
  transition: 'color 0.3s',
  ':hover': {
    color: '#007bff',
  },
});

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
