import { style } from '@vanilla-extract/css';
import { colors } from '@/styles/colors.css';

export const boardContainer = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: colors.background,
    minHeight: '100vh',
});

export const boardPageTitle = style({
    fontSize: '2rem',
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: '16px',
});

export const boardListContainer = style({
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
});