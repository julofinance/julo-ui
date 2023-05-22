import isFn from '@julofinance/web-helpers/dist/fn/isFn';

import { DEFAULT_THEME } from './constants';
import { Colors, DefaultTheme, Theme } from './types';

export function generateColorsCssVar(colors: Colors) {
  const keys = Object.keys(colors);
  let result = '';

  for (const key of keys) {
    const innerKeys = Object.keys(colors[key]);

    for (const innerKey of innerKeys) {
      result += `--colors-${key}-${innerKey}: ${colors[key][innerKey]};`;
    }
  }

  return result;
}

export function generateCommonCssVar(
  prefixKey: string,
  object: Record<string, unknown>,
) {
  const keys = Object.keys(object);
  let result = '';

  for (const key of keys) {
    result += `--${prefixKey}-${key}: ${object[key]};`;
  }

  return result;
}

interface CallBackThemeReturn {
  colors?: Theme['colors'];
  fontSizes?: Theme['fontSizes'];
  lineHeights?: Theme['lineHeights'];
}

type CallbackTheme = (defaultTheme: DefaultTheme) => CallBackThemeReturn;

export const extendsTheme = (theme: Theme | CallbackTheme): Theme => {
  if (isFn(theme)) theme = theme(DEFAULT_THEME) as unknown as Theme;

  return {
    ...theme,
    colors: { ...DEFAULT_THEME.colors, ...theme.colors },
    fontSizes: { ...DEFAULT_THEME.fontSizes, ...theme.fontSizes },
    lineHeights: { ...DEFAULT_THEME.lineHeights, ...theme.lineHeights },
  };
};
