import { style } from "@vanilla-extract/css";

export const navbar = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    gap: '20px',
  });
  
export const navLinks = style({
    display: 'flex',
    listStyle: 'none',
    gap: '50px',
    fontSize: '1.3rem',
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