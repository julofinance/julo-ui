import { ReactElement } from 'react';
import * as rtl from '@testing-library/react';

import { runIfFn } from '@julo-ui/function-utils';
import { JuloProvider } from '@julo-ui/provider';

import { RenderOptions } from './type';

export const render = (ui: ReactElement, options: RenderOptions = {}) => {
  const { extendWrapper } = options;

  const rendered = rtl.render(ui, {
    wrapper: ({ children }) => (
      <JuloProvider>
        {runIfFn(extendWrapper, { children }) ?? children}
      </JuloProvider>
    ),
    ...options,
  });

  return {
    ...rendered,
    rerender: (ui: ReactElement, options: RenderOptions = {}) =>
      render(ui, { container: rendered.container, ...options }),
  };
};
