import { style } from '@vanilla-extract/css';

export const container = style({
  color: 'hsl(0, 0%, 30%)',
  fontWeight: '800',
  fontSize: '2rem',
  display: 'flex',
});

export const toggle = style({
  width: '30px',
  height: '60px',
  backgroundColor: 'hsl(0, 0%, 80%)',
  borderRadius: '1rem',
  padding: '.2rem 0',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  transition: 'background-color 300ms 300ms',
});

export const toggleCircle = style({
  width: '20px',
  height: '20px',
  backgroundColor: 'hsl(0, 0%, 95%)',
  borderRadius: '50%',
  marginTop: 'calc(60px - 20px)',
  transition: 'margin 500ms ease-in-out',
});

export const toggleText = style({
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '2',
  fontSize: '1rem',
  marginLeft: '5px'
});

export const toggleChecked = style({
  backgroundColor: '#41a63c',
});

export const toggleCircleChecked = style({
  marginTop: '0',
});
