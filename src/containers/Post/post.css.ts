
import { style } from '@vanilla-extract/css';


 
export const postContainer = style({
  width:'90%',
  height:'90%',
  margin: '40px auto',
  padding: '24px 24px 40px 24px',
  // backgroundColor: '#fff',
  backgroundColor :'#fff',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '25px',
  boxSizing: 'border-box', 
});

export const resultWrapper =style({
  display: 'flex',
  flexDirection: 'column', 
  gap: '5px', 
  width: '100%',
  height:'100%',

  
})

export const contentAnalysisContainer = style({
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#f1f3f5',
    width: '100%',
    height:'100%',
    boxSizing: 'border-box',

  });


// 카드 스타일
export const card = style({
    width: '95%',
    height: '100%',
    backgroundColor: '#F8FBFE',
    borderRadius: '10px',
    margin:'50px auto',
    paddingBottom:'30px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

// 툴바 스타일
export const tools = style({
  display: 'flex',
  alignItems: 'center',
  padding: '9px',
});

// 원형 버튼 스타일
export const circle = style({
  padding: '0 4px',
});

// 색상 박스 스타일
export const box = style({
  display: 'inline-block',
  width: '10px',
  height: '10px',
  padding: '1px',
  borderRadius: '50%',
});

// 색상별 스타일
export const red = style({
  backgroundColor: '#ff605c',
});

export const yellow = style({
  backgroundColor: '#ffbd44',
});

export const green = style({
    backgroundColor: '#00ca4e',
  });

export const card__content =style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px', // 콘텐츠 간격
});