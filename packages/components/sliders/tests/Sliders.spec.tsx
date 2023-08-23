import { render, screen } from '@julo-ui/rtl-utils';

import Sliders from '../src';

describe('Sliders', () => {
  test('should render Sliders', () => {
    render(<Sliders />);
    screen.getByText('Hello World');
  });
});
