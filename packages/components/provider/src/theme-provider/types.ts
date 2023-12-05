import type { ThemeProviderProps as EmotionThemeProviderProps } from '@emotion/react';

import type { Dict } from '@julo-ui/system';

import { DEFAULT_THEME } from './foundations';

type Key = number | string;

export type Colors = Record<Key, Record<Key, string>>;
export type FontSizes = Record<Key, string>;
export type LineHeights = Record<Key, string>;
export type Shadows = Record<Key, string>;

export interface ThemeProviderProps
  extends Omit<EmotionThemeProviderProps, 'theme'> {
  theme?: Dict;
}

export type Theme = typeof DEFAULT_THEME | Dict;

export interface UseThemeReturn {
  colors: Colors | Theme['colors'];
  fontSizes: FontSizes | Theme['fontSizes'];
  lineHeights: LineHeights | Theme['lineHeights'];
  shadows: Shadows | Theme['shadows'];
}
