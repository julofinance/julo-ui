import { render, screen } from '@julo-ui/rtl-utils';

import Radio from '../src';

describe('Radio', () => {
  test('should render Radio', () => {
    render(<Radio />);
    screen.getByText('Hello World');
  });
});
