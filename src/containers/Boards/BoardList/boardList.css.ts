import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/colors.css';


export const boardListContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // 한 행에 여러 열이 들어가도록 설정
  gap: '50px',
  width: '90%',
  padding: '30px',
  marginTop:'20px',
  borderRadius: '13px',
  height :'100%',
  minHeight: '700px',
  backgroundColor :'#ffffff',
  boxSizing: 'border-box',
  gridAutoFlow: 'row',
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
  height: '100%',
  maxHeight: '330px', 
  cursor: 'pointer',

  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  },
})

export const boardTitle = style({
  margin:'0',
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '4px',
  overflow: 'hidden',
  justifyContent: 'flex-start',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap', 
  maxWidth: '100%', 
});

export const boardDescription = style({
  fontSize: '14px',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 3, 
  overflow: 'hidden',
  maxWidth: '100%',
});

export const boardFooter = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: '1',
  visibility: 'visible',
});

export const boardPeriod = style({
  fontSize: '14px',
  color: colors.tertiary,
});

export const boardDepts =style({
  width :"100%",
  display : "flex",
  flexDirection:"row",
  flexWrap:"wrap",
  gap:"8px",
});

export const boardDpetLabels = style({
  backgroundColor : colors.department,
  alignItems: "center",
  justifyContent : "center",
  borderRadius:"8px",
  display: "flex", 
  height: "30px",
  width:"auto",
  whiteSpace: "nowrap",
  padding:"0 5px",

});

export const buttonHidden = style({
  height:'30%',
  minHeight:'20px',
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
  gap: "5px",
  height: "100%",
  width: "100%",
});

export const boardWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  padding:'3px',
  borderRadius: '8px',
  margin:'5px',
  justifyContent: 'flex-start',
  width: '100%', 
  height: "100%",
  boxSizing: 'border-box',
});

  export const buttonAndBoardWrapper = style({
  display: 'flex',
  justifyContent: 'flex-start',
  height:"100%",
  flexDirection: 'column',
  boxSizing: 'border-box',
  gap: '12px', 
});