import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/colors.css';

export const postSection = style({
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: '16px',
    gap: '16px',
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
    position: 'relative',
    padding: '12px',
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    ':last-child': {
        borderBottom: 'none',
    },
});

export const postsWrapper = style({
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: colors.background,
    gap: '12px',
    justifyContent: 'center',
    width: '200px',
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

export const postActions = style({
  position: 'absolute',
  top: '16px',
  right: '16px',
  display: 'flex',
  gap: '8px',
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.2s ease, visibility 0.2s ease',
  selectors: {
    [`${postItem}:hover &`]: {
      opacity: 1,
      visibility: 'visible',
    },
  },
});