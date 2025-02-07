import { style } from '@vanilla-extract/css';

export const postContainer = style({
    maxWidth: '900px',
    margin: '0 auto',
    padding: '24px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
});

export const contentAnalysisContainer = style({
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#f1f3f5',
  });