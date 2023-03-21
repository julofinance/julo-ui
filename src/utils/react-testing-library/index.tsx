import '@testing-library/jest-dom';
import { ReactElement } from 'react';
import { render as _render } from '@testing-library/react';

import runIfFn from '@julofinance/web-helpers/dist/fn/runIfFn';

import { RenderOptions } from './type';
import { ThemeProvider } from '../../provider';

export const render = (ui: ReactElement, options: RenderOptions = {}) => {
  const { extendWrapper } = options;

  const rendered = _render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider>
        {runIfFn(extendWrapper, { children }) ?? children}
      </ThemeProvider>
    ),
    ...options,
  });

  return {
    ...rendered,
    rerender: (ui: ReactElement, options: RenderOptions) =>
      render(ui, { container: rendered.container, ...options }),
  };
};

export * from '@testing-library/react';
