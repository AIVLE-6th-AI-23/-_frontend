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

export const toggleLeft =style({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width:'53%',
}); 

export const boardPageTitle = style({
    display: 'flex',
    alignItems: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    color: colors.text,
});

export const boardHeader = style({
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '24px',
    width : '100%',
    padding: '0 0 0 20px',
});