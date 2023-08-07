import { render, screen } from '@julo-ui/rtl-utils';

import Checkbox from '../src';

describe('Checkbox', () => {
  test('should render Checkbox', () => {
    render(<Checkbox />);
    screen.getByText('Hello World');
  });
});
