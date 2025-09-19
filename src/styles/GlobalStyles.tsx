import { GlobalStyles as MUIGlobalStyles } from '@mui/material';

export const GlobalStyles = () => (
  <MUIGlobalStyles
    styles={{
      html: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
      },
      body: {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
      },
      '#root': {
        width: '100%',
        height: '100%',
      },
      '*': {
        boxSizing: 'border-box',
      },
    }}
  />
);
