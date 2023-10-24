import { render, screen } from '@julo-ui/rtl-utils';

import Alert from '../src';

describe('Alert', () => {
  test('should render Alert', () => {
    render(<Alert />);
    screen.getByText('Hello World');
  });
});
