import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f8f9fa',
});

export const hero = style({
  textAlign: 'center',
});

export const title = style({
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '16px',
  color: '#333',
});

export const subtitle = style({
  fontSize: '18px',
  color: '#555',
});
