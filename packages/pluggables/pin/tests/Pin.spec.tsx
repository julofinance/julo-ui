import { render, screen } from '@julo-ui/rtl-utils';

import Pin from '../src';

describe('Pin', () => {
  test('should render Pin', () => {
    render(<Pin />);
    screen.getByText('Hello World');
  });
});
