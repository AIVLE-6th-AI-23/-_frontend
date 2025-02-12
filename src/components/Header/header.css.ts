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
  fontFamily: 'var(--font-my-font), sans-serif',
});

export const headerContainer = style({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
});
