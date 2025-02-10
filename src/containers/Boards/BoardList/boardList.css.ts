import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/colors.css';

export const boardListContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(300px, 1fr))',
  gap: '16px',
  width: '100%',
  padding: '16px',
});


export const boardItem = style({
  position: 'relative',
  backgroundColor: '#f9f9f9',
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  },
});

export const boardTitle = style({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '4px',
});

export const boardDescription = style({
  fontSize: '14px',
});

export const boardFooter = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 0',
  opacity: 0,
  visibility: 'hidden',
  selectors: {
    [`${boardItem}:hover &`]: {
      opacity: 1,
      visibility: 'visible',
    },
  },
});

export const boardPeriod = style({
  fontSize: '14px',
  color: colors.tertiary,
});

export const boardActions = style({
  position: 'absolute',
  top: '16px',
  right: '16px',
  display: 'flex',
  gap: '8px',
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.2s ease, visibility 0.2s ease',
  selectors: {
    [`${boardItem}:hover &`]: {
      opacity: 1,
      visibility: 'visible',
    },
  },
});

export const boardWrapper = style({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: colors.background,
  gap: '12px',
  justifyContent: 'center',
  width: '200px',
});