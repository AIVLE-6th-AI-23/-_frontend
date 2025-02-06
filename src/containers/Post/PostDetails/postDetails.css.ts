import { style } from '@vanilla-extract/css';

export const postDetailsContainer = style({
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

export const postThumbnailStyle = style({
  display: 'flex',
  justifyContent: 'center',
  width: '75%',
  margin: '0 auto',
});

export const postTitleStyle = style({
  fontSize: '20px',
  fontWeight: '600',
  color: '#333',
  textAlign: 'center',
});

export const postDescriptionStyle = style({
  fontSize: '14px',
  color: '#666',
  textAlign: 'center',
});

export const editFormStyle = style({
  padding: '16px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const buttonStyle = style({
  padding: '10px 16px',
  borderRadius: '8px',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',

  ':hover': {
    backgroundColor: '#0056b3',
  },
});

export const infoTextStyle = style({
  fontSize: '12px',
  color: '#888',
  textAlign: 'center',
});

export const contentAnalysisContainer = style({
  padding: '16px',
  borderRadius: '8px',
  backgroundColor: '#f1f3f5',
});
