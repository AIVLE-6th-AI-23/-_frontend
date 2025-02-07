import { style } from '@vanilla-extract/css';

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