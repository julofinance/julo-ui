import { ReactElement } from 'react';
import userEvent from '@testing-library/user-event';
import * as rtl from '@testing-library/react';

import { runIfFn } from '@julo-ui/function-utils';
import { JuloProvider } from '@julo-ui/provider';

import { RenderOptions } from './type';

export const render = (ui: ReactElement, options: RenderOptions = {}) => {
  const { extendWrapper } = options;

  const user = userEvent.setup();

  const rendered = rtl.render(ui, {
    wrapper: ({ children }) => (
      <JuloProvider>
        {runIfFn(extendWrapper, { children }) ?? children}
      </JuloProvider>
    ),
    ...options,
  });

  return {
    user,
    ...rendered,
    rerender: (ui: ReactElement, options: RenderOptions = {}) =>
      render(ui, { container: rendered.container, ...options }),
  };
};
