import { style } from "@vanilla-extract/css";

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