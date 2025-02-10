import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/colors.css';

export const boardListBody = style({
  width: '90%', 
  height: '90%',
  borderRadius: '12px', 
  margin: '0 auto', 
  display: 'flex', 
  justifyContent: 'center', 
  alignItems: 'center', 
  overflow: 'hidden', 
})

export const boardListContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // 한 행에 여러 열이 들어가도록 설정
  gap: '16px',
  width: '100%',
  padding: '16px',
  boxSizing: 'border-box',
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
  height: 'auto',
  minHeight: '200px', 
  cursor: 'pointer',

  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  },
})

export const boardTitle = style({
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '4px',
});

export const boardDescription = style({
  fontSize: '14px',
});

export const boardDeptIds = style({
  fontSize: '14px',
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

export const buttonContainer = style({
  display: "flex",
  justifyContent: "center",
  gap: "15px",
  alignItems: "center",
  height: "100%",
  width: "auto", 
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
  width: '78%', // 부모의 크기에 맞게 폭을 자동으로 조정
  height: "100%",
  boxSizing: 'border-box', // 여백을 포함한 크기 계산
   });

   export const buttonAndBoardWrapper = style({
    display: 'flex',
    height:"90%",
    flexDirection: 'column',
    gap: '12px', 
  });