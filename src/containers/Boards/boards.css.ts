import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/colors.css';
import { createButton } from '@/styles/Actionbuton.css';

export const boardContainer = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: colors.background,
    minHeight: '100vh',
});


export const boardPageTitle = style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    justifySelf:'center',
    color: colors.text,
});

export const boardHeader = style({
    display: 'grid',
    gridTemplateColumns:'1fr auto 1fr',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '24px',
    width : '100%',
    padding: '0 0 0 20px',
});
