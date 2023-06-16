import { isValidElement } from 'react';
import { RenderOptions } from '@testing-library/react';
import { JestAxeConfigureOptions, axe, toHaveNoViolations } from 'jest-axe';

import { render } from './render';

expect.extend(toHaveNoViolations);

export async function testA11y(
  ui: React.ReactElement | HTMLElement,
  options: RenderOptions & { axeOptions?: JestAxeConfigureOptions } = {},
) {
  const { axeOptions, ...resOptions } = options;
  const container = isValidElement(ui) ? render(ui, resOptions).container : ui;
  const results = await axe(container as HTMLElement, axeOptions);
  expect(results).toHaveNoViolations();
}
