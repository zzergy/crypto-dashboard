import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './styles/theme/theme.ts';
import { SnackbarProvider } from 'notistack';
import { GlobalStyles } from './styles/GlobalStyles.tsx';

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
