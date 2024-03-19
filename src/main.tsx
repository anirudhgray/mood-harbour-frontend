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
    sad: Palette['primary'];
    flat: Palette['primary'];
    okay: Palette['primary'];
    good: Palette['primary'];
  }
  interface PaletteOptions {
    angry: PaletteOptions['primary'];
    sad: PaletteOptions['primary'];
    flat: PaletteOptions['primary'];
    okay: PaletteOptions['primary'];
    good: PaletteOptions['primary'];
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
    sad: {
      main: alpha('#F895EE', 0.44),
    },
    flat: {
      main: alpha('#9599F8', 0.44),
    },
    okay: {
      main: alpha('#95F8EC', 0.44),
    },
    good: {
      main: alpha('#A3F895', 0.44),
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
