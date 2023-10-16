import { useContext } from 'react';
import {
  ThemeProvider as EmotionThemeProvider,
  ThemeContext as EmotionThemeContext,
} from '@emotion/react';

import { Dict } from '@julo-ui/react';

import { DEFAULT_THEME } from './foundations';
import type { ThemeProviderProps, UseThemeReturn, Theme } from './types';
import GlobalStyle from './styles/app';

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme = DEFAULT_THEME } = props;

  return (
    <EmotionThemeProvider theme={theme}>
      {children}
      <GlobalStyle {...(theme as Theme)} />
    </EmotionThemeProvider>
  );
};

const useTheme = <T extends object = Dict>() => {
  const context = useContext(
    EmotionThemeContext as unknown as React.Context<T | undefined>,
  );
  if (!context) throw new Error('useTheme must be used within ThemeProvider');

  return context as UseThemeReturn;
};

export { ThemeProvider, useTheme };
