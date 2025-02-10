import { colors } from '@/styles/colors.css';
import { style } from '@vanilla-extract/css';

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
    width: '100%',
});

export const postsHeader = style({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    padding: '16px 24px',
    borderBottom: '1px solid #e0e0e0',
});

export const postsTitle = style({
    fontSize: '2rem',
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: '16px',
})