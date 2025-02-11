import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f8f9fa',
});

export const resetBox = style({
  width: '400px',
  padding: '40px',
  borderRadius: '12px',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
  textAlign: 'center',
});

export const title = style({
  marginBottom: '20px',
  fontSize: '26px',
  fontWeight: '600',
  color: '#202124',
});

export const input = style({
  width: '100%',
  padding: '12px',
  margin: '12px 0',
  border: '1px solid #dadce0',
  borderRadius: '6px',
  fontSize: '16px',
  outline: 'none',
  transition: 'border-color 0.3s',

  ':focus': {
    borderColor: '#1a73e8',
  },
});

export const button = style({
  width: '100%',
  padding: '12px',
  backgroundColor: '#1a73e8',
  color: '#ffffff',
  border: 'none',
  borderRadius: '6px',
  fontSize: '16px',
  cursor: 'pointer',
  fontWeight: '500',
  transition: 'background-color 0.3s',

  ':hover': {
    backgroundColor: '#1669c1',
  },
});

export const error = style({
  color: '#d93025',
  fontSize: '14px',
  marginBottom: '10px',
});

export const message = style({
  fontSize: '16px',
  color: '#202124',
  marginTop: '20px',
});
