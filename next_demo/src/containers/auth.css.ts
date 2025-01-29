import { style } from '@vanilla-extract/css';

export const mainContainer = style({
  position: 'relative',
  width: '400px',
  padding: '40px 20px',
  background: '#ffffff',
  borderRadius: '15px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
});

export const formGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const label = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
  textAlign: 'center',
});

export const input = style({
  width: '100%',
  height: '45px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '25px',
  fontSize: '1rem',
  color: '#555',
  boxSizing: 'border-box',
  outline: 'none',
  transition: 'border-color 0.3s ease',
  selectors: {
    '&:focus': {
      borderColor: '#007bff',
    },
  },
});

export const button = style({
  width: '100%',
  height: '45px',
  background: 'linear-gradient(135deg, #6c63ff, #007bff)',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  selectors: {
    '&:hover': {
      background: 'linear-gradient(135deg, #0056b3, #6c63ff)',
    },
  },
});

export const passwordMessage = style({
  fontSize: '0.9rem',
  textAlign: 'left',
  color: 'red',
  selectors: {
    '&.valid': {
      color: 'green',
    },
  },
});
