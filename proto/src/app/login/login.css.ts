import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
});

export const loginBox = style({
  width: '300px',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
});

export const title = style({
  marginBottom: '20px',
  fontSize: '24px',
  fontWeight: 'bold',
});

export const input = style({
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
});

export const button = style({
  width: '100%',
  padding: '10px',
  backgroundColor: '#007bff',
  color: '#ffffff',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',

  ':hover': {
    backgroundColor: '#0056b3',
  },
});

export const error = style({
  color: 'red',
  fontSize: '14px',
  marginBottom: '10px',
});
