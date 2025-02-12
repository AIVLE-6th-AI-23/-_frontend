import { fontFace, globalStyle } from '@vanilla-extract/css'; 
import { Html } from 'next/document';


export const nanum = fontFace({
  fontWeight: '200',  // 폰트 두께 (옵션)
  src: 'url("/fonts/TTF/NanumSquareNeo-bRg.ttf") format("truetype")',  // 폰트 파일 경로
});

globalStyle(`html, body`, {
  padding: 0,
  margin: 0,
  height: '100%',
  fontFamily: 'var(--font-my-font), NanumSquareNeo-bRg, sans-serif',
  // backgroundColor: '#f0f0f0', // 필요하다면 주석을 해제하세요.
});


