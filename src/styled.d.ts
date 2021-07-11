import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      primaryDark: string;
      secondary: string;
      secondaryDark: string;
      white: string;
      gray: string;
      grayLight: string;
      grayDark: string;
      border: string;
      default: string;
      error: string;
    };

    size: {
      h1: number;
      h2: number;
      h3: number;
      xg: number;
      lg: number;
      md: number;
      sm: number;
      xs: number;
    };
    lineHeight: {
      xg: number;
      lg: number;
      md: number;
      sm: number;
      xs: number;
    };
    fontWeight: {
      bold: string;
      normal: string;
      light: number;
    };
    depth: {
      level1: {
        boxShadow: string;
      };
      level2: {
        boxShadow: string;
      };
      level3: {
        boxShadow: string;
      };
    };

    unit: number;
  }
}
