import { style } from '@vanilla-extract/css';

export const contentAnalysisContainer = style({
  padding: '16px',
  borderRadius: '8px',
  backgroundColor: '#f1f3f5',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

export const analysisTitleStyle = style({
  fontSize: '18px',
  fontWeight: '600',
  color: '#333',
  marginBottom: '8px',
});

export const analysisTextStyle = style({
  fontSize: '14px',
  color: '#555',
  marginBottom: '4px',
});

export const analysisListStyle = style({
  listStyle: 'none',
  padding: '0',
  margin: '0',
});

export const analysisListItemStyle = style({
  fontSize: '14px',
  color: '#444',
  padding: '6px 0',
  borderBottom: '1px solid #ddd',

  ':last-child': {
    borderBottom: 'none',
  },
});
