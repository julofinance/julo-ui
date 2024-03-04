import { isFn } from '@julo-ui/function-utils';

import { DEFAULT_THEME } from './foundations';
import { Colors, Theme } from './types';

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

type CallbackTheme = (defaultTheme: Theme) => Theme;

export const extendsTheme = (theme: Theme | CallbackTheme): Theme => {
  if (isFn(theme)) theme = theme(DEFAULT_THEME) as unknown as Theme;

  const defaultThemeKeys = Object.keys(DEFAULT_THEME);
  const defaultThemeVals = defaultThemeKeys.reduce(
    (prevThemeVals, currentKey) => ({
      ...prevThemeVals,
      [currentKey]: {
        ...DEFAULT_THEME[currentKey as keyof typeof DEFAULT_THEME],
        ...(theme as Theme)[currentKey as keyof Theme],
      },
    }),
    {},
  );

  return {
    ...theme,
    ...defaultThemeVals,
  };
};
