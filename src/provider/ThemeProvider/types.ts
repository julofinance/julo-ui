import type { ReactNode } from 'react';

type Key = number | string;

export type Colors = Record<Key, Record<Key, string>>;
export type FontSizes = Record<Key, string>;
export type LineHeights = Record<Key, string>;

export interface Theme extends Record<string, unknown> {
  colors: Colors;
  fontSizes: FontSizes;
  lineHeights: LineHeights;
}

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: Theme;
}

export interface UseThemeReturn {
  colors: Colors | DefaultTheme['colors'];
  fontSizes: FontSizes | DefaultTheme['fontSizes'];
  lineHeights: LineHeights | DefaultTheme['lineHeights'];
}

export interface DefaultTheme {
  colors: {
    primary: {
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
    };
    green: {
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
    };
    red: {
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
    };
    orange: {
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
    };
    blue: {
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
    };
    neutrals: {
      10: string;
      20: string;
      30: string;
      40: string;
      50: string;
      60: string;
      70: string;
      80: string;
      90: string;
      100: string;
    };
    overlay: {
      70: string;
    };
  };
  fontSizes: {
    bodyRegular: string;
    bodySmall: string;
    captionRegular: string;
    captionSmall: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
  lineHeights: {
    bodyRegular: string;
    bodySmall: string;
    captionRegular: string;
    captionSmall: string;
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
}
