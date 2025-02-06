import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/colors.css';


export const boardContainer = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: colors.background,
    minHeight: '100vh',
});

export const boardPageTitle = style({
    fontSize: '2rem',
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: '16px',
});

export const boardListContainer = style({
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
});

export const boardItem = style({
    backgroundColor: colors.primary,
    color: colors.text,
    padding: '2vw',
    marginBlock: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    width: '100%',
    maxWidth: '600px',
    minHeight: '10vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  });

export const boardTitle = style({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '4px',
});

export const boardDescription = style({
  fontSize: '14px',
});

export const boardWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: colors.background,
  gap: '24px',
  justifyContent: 'center',
  width: '90%',
});