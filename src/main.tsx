import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './styles/theme/theme';
import { SnackbarProvider } from 'notistack';
import { GlobalStyles } from './styles/GlobalStyles';
import App from './App';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <SnackbarProvider
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                maxSnack={3}
                autoHideDuration={3000}
            >
                <GlobalStyles />
                <App />
            </SnackbarProvider>
        </ThemeProvider>
    </StrictMode>
);
