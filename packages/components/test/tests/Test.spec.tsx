import { render, screen } from '@julo-ui/rtl-utils';

import Test from '../src';

describe('Test', () => {
  test('should render Test', () => {
    render(<Test />);
    screen.getByText('Hello World');
  });
});
