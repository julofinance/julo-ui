import { render, screen } from '@julo-ui/rtl-utils';

import Card from '../src';

describe('Card', () => {
  test('should render Card', () => {
    render(<Card />);
    screen.getByText('Hello World');
  });
});
