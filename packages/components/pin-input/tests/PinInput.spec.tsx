import { render, screen } from '@julo-ui/rtl-utils';

import PinInput from '../src';

describe('PinInput', () => {
  test('should render PinInput', () => {
    render(<PinInput />);
    screen.getByText('Hello World');
  });
});
