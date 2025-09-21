import { createTheme } from '@mui/material/styles';
import { palette } from './palette.ts';

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: palette.primary },
        secondary: { main: palette.secondary },
        background: palette.background,
        text: palette.text,
        error: { main: palette.error },
        warning: { main: palette.warning },
        info: { main: palette.info },
        success: { main: palette.success },
    },
    typography: {
        fontFamily: "'Manrope', sans-serif",
    },
});
