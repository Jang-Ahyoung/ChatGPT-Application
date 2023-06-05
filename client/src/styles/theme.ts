import { Theme } from '@emotion/react';

const theme: Theme = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  fontSizes: {
    xxs: '12px',
    xs: '13px',
    sm: '14px',
    base: '16px',
    md: '18px',
    lg: '24px',
  },
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
      transparent: 'transparent',
    },
    secondary: {
      light: '#E1E4E3',
      dark: '#191a20',
      main: '#3f4150',
      hover: '#3E3E3E',
      contrastText: '#E1E4E3',
    },
    error: {
      light: 'rgb(235, 127, 119)',
      dark: 'rgb(161, 67, 59)',
      main: '#E76055',
      contrastText: '#FFFFFF',
    },
  },
};

export default theme;
