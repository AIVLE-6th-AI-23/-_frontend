import { colors } from '@/styles/colors.css';
import { style } from '@vanilla-extract/css';


export const analyzeWrapper =style({
  width:'100%',
  height:'100%',
  boxSizing:'border-box',
  display:'flex',
  flexDirection:'column',
});

export const editbuttonTop =style({
  width:'100%',
  height:'40px',
  display:'flex',
  justifyContent: 'flex-end',
});

export const postThumbnailStyle = style({
  display: 'flex',
  justifyContent: 'center',
  width: '80%',
  margin: '0 auto',
});

export const postHeader = style({
  width:'100%',
  display: 'flex',
  position: 'relative',
  flexDirection:'column',
  justifyContent: 'center',
  alignItems : 'center',
  backgroundColor:'#fff',
  borderRadius:'10px',
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
  width: "100%",
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
