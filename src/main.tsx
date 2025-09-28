import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { darkTheme } from './styles/theme/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import App from './App';

const queryClient = new QueryClient();

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
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </SnackbarProvider>
        </ThemeProvider>
    </StrictMode>
);
