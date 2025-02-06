import { colors } from '@/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const postContainer = style({
    display: 'flex',
    flexDirection: 'row',
    gap: '24px',
    padding: '20px',
    backgroundColor: colors.primary,
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
});

export const postSectionWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    width: '100%',
});

export const postsTitle = style({
    fontSize: '2rem',
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: '16px',
})