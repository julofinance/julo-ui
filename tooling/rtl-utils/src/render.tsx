import { ReactElement } from 'react';
import * as rtl from '@testing-library/react';

import runIfFn from '@julofinance/web-helpers/dist/fn/runIfFn';
import { ThemeProvider } from '@julo-ui/providers';

import { RenderOptions } from './type';

export const render = (ui: ReactElement, options: RenderOptions = {}) => {
  const { extendWrapper } = options;

  const rendered = rtl.render(ui, {
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
