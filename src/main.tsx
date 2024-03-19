import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {
  ThemeProvider,
  alpha,
  createTheme,
  responsiveFontSizes,
} from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    angry: Palette['primary'];
  }
  interface PaletteOptions {
    angry: PaletteOptions['primary'];
  }
}

let theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  // define a custom color palette
  palette: {
    primary: {
      main: alpha('#AE7FFB', 1),
    },
    secondary: {
      main: alpha('#F895C4', 1),
    },
    angry: {
      main: alpha('#F89595', 0.44),
    },
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
