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

export const boardHeader = style({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width : '100%',
    padding: '16px 24px',
    borderBottom: '1px solid #e0e0e0',
});