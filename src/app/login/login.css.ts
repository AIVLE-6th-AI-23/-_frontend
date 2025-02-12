import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f8f9fa',
});

export const loginBox = style({
  width: '400px',
  padding: '40px',
  borderRadius: '12px',
  backgroundColor: '#ffffff',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
  textAlign: 'center',
});

export const inputButtonContainer = style({
  width:'100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

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
  boxSizing:'border-box',

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

export const userIdDisplay = style({
  fontSize: '18px',
  fontWeight: '500',
  color: '#202124',
  marginBottom: '12px',
  cursor: 'pointer',
});

export const backButton = style({
  marginTop: '10px',
  backgroundColor: 'transparent',
  border: 'none',
  color: '#1a73e8',
  fontSize: '14px',
  cursor: 'pointer',
  textDecoration: 'underline',

  ':hover': {
    textDecoration: 'none',
  },
});

export const signupLink = style({
  marginTop: '16px',
  fontSize: '14px',
  color: '#5f6368',
});

export const link = style({
  color: '#1a73e8',
  textDecoration: 'none',
  fontWeight: '500',

  ':hover': {
      textDecoration: 'underline',
  },
});