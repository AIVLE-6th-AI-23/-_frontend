import { colors } from '@/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const postContainer = style({
    display: 'flex',
    height:'100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    padding: '20px',
    backgroundColor: colors.background,
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
});


export const postSectionWrapper = style({
    alignItems:'start',
    gap: '16px',
    width: '93%',
    padding:'20px',
    borderRadius:'20px',
    //backgroundColor:'#e7edef',
    backgroundColor: colors.background,
});

export const postsHeader = style({
    position: 'relative',
    display: 'grid',
    gridTemplateColumns:'1fr auto 1fr',
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
    justifySelf:'center',
})