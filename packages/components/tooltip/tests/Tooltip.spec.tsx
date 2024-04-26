import { render, screen } from '@julo-ui/rtl-utils';

import Tooltip from '../src';

describe('Tooltip', () => {
  test('should render Tooltip', () => {
    render(<Tooltip />);
    screen.getByText('Hello World');
  });
});
