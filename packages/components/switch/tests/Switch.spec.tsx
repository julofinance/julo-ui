import { render, screen } from '@julo-ui/rtl-utils';

import Switch from '../src';

describe('Switch', () => {
  test('should render Switch', () => {
    render(<Switch />);
    screen.getByText('Hello World');
  });
});
