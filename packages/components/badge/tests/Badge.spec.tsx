import { render, screen, testA11y } from '@julo-ui/rtl-utils';

import Badge from '../src';

describe('Accessibility', () => {
  test('passes a11y test in default state', async () => {
    await testA11y(<Badge />);
  });
});

describe('Badge', () => {
  test('should render Badge correctly', () => {
    render(<Badge>Hello World</Badge>);
    screen.getByText('Hello World');
  });

  test('should render Badge Icon correctly', () => {
    render(
      <Badge leftIcon={<>left</>} rightIcon={<>right</>}>
        Hello World
      </Badge>,
    );

    screen.getByText('Hello World');
    screen.getByText('left');
    screen.getByText('right');
  });
});
