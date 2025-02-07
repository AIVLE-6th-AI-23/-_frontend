import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/colors.css';

export const postSection = style({
    padding: '16px',
    backgroundColor: colors.background,
    borderRadius: '8px',
    marginBottom: '24px',
});

export const sectionTitle = style({
    fontSize: '30px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: colors.text,
});

export const postItem = style({
    listStyle: 'none',
    padding: '12px',
    borderBottom: `10px solid`,
    backgroundColor: colors.tertiary,
    ':last-child': {
        borderBottom: 'none',
    },
});

export const postTitle = style({
    fontSize: '20px',
    fontWeight: 'bold',
    margin: '8px 0',
    color: colors.text,
});

export const postDescription = style({
    fontSize: '14px',
    color: colors.text,
    marginBottom: '8px',
});

export const postStatus = style({
    fontSize: '12px',
    fontWeight: 'bold',
    color: colors.primary,
});

export const postViewCount = style({
    fontSize: '12px',
    color: colors.secondary,
});
