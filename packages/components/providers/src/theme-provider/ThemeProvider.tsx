import { createContext, useContext } from 'react';

import type { Theme, ThemeProviderProps, UseThemeReturn } from './types';
import GlobalStyle from './styles/app';

import { DEFAULT_THEME } from './constants';

const ThemeContext = createContext<Theme>(DEFAULT_THEME as unknown as Theme);

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children, theme } = props;

  return (
    <ThemeContext.Provider value={theme ?? (DEFAULT_THEME as unknown as Theme)}>
      {children}
      <GlobalStyle {...(theme ?? DEFAULT_THEME)} />
    </ThemeContext.Provider>
  );
};

const useTheme = (): UseThemeReturn => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');

  return context as UseThemeReturn;
};

export { ThemeProvider, useTheme };
