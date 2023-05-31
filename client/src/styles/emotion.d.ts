import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    fontSizes: {
      xxs: string;
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
    };
    palette: {
      black: string;
      dark: string;
      error: string;
      primary: string;
      secondary: string;
    };
  }
}
