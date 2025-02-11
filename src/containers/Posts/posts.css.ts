import { colors } from '@/styles/colors.css';
import { style } from '@vanilla-extract/css';
import { color } from 'framer-motion';

export const postContainer = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    padding: '20px',
    backgroundColor: colors.background,
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
});

export const postSectionWrapper = style({
    display: 'grid',
    alignItems:'start',
    gridTemplateColumns: 'repeat(2, auto)',
    gap: '16px',
    width: '93%',
    padding:'20px',
    margin:'0 20px',
    borderRadius:'20px',
    //backgroundColor:'#e7edef',
    backgroundColor: colors.background,
});

export const postsHeader = style({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width : '100%',
    padding: '0 0 0 10px',
    justifyContent: 'flex-start',
  
});

export const postsTitle = style({
    fontSize: '2rem',
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: '16px',
})