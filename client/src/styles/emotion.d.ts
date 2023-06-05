import '@emotion/react';
import theme from './styles/theme';

declare module '@emotion/react' {
  export type Theme = {
    breakpoints: {
      values: {
        [key in keyof theme['values']]: number;
      };
    };
    fontSizes: {
      [key in keyof theme['fontSizes']]: string;
    };
    palette: {
      common: {
        [key in keyof theme['common']]: string;
      };
      secondary: {
        [key in keyof theme['secondary']]: string;
      };
      error: {
        [key in keyof theme['error']]: string;
      };
    };
  };
}
