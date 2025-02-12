import { style } from "@vanilla-extract/css";
import localFont from 'next/font/local'


const myFont = localFont({
    src: '/fonts/TTF/NanumSquareNeo-bRg.ttf',  // public 폴더 내 경로
    display: 'swap',
    variable: '--font-custom',
  });
  