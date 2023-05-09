import { render, screen } from '@julo-ui/rtl-utils';

import Typography from '../src';

describe('Typography', () => {
  test('renders Typography type body', async () => {
    render(<Typography type='body'>Hello World!</Typography>);

    const txtTesting = screen.queryByText('Hello World!');
    expect(txtTesting).toBeInTheDocument();
  });

  test('renders Typography type heading', async () => {
    render(
      <Typography type='heading' headingType={1}>
        Hello World!
      </Typography>,
    );

    const txtTesting = screen.queryByText('Hello World!');
    expect(txtTesting).toBeInTheDocument();
  });

  test('renders Typography type caption', async () => {
    render(<Typography type='caption'>Hello World!</Typography>);

    const txtTesting = screen.queryByText('Hello World!');
    expect(txtTesting).toBeInTheDocument();
  });

  test('renders Typography type body asChild', async () => {
    render(
      <Typography data-testid='typography' type='body' asChild>
        <p data-testid='paragraph'>Hello World</p>
      </Typography>,
    );

    const typography = screen.queryByTestId('typography');
    const paragraph = screen.queryByTestId('paragraph');

    expect(typography).not.toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent('Hello World');
  });

  test('renders Typography type heading asChild', async () => {
    render(
      <Typography
        data-testid='typography'
        type='heading'
        headingType={1}
        asChild
      >
        <p data-testid='paragraph'>Hello World</p>
      </Typography>,
    );

    const typography = screen.queryByTestId('typography');
    const paragraph = screen.queryByTestId('paragraph');

    expect(typography).not.toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent('Hello World');
    expect(paragraph?.getAttribute('data-heading-type')).toContain('1');
  });

  test('renders Typography type caption asChild', async () => {
    render(
      <Typography data-testid='typography' type='caption' asChild>
        <p data-testid='paragraph'>Hello World</p>
      </Typography>,
    );

    const typography = screen.queryByTestId('typography');
    const paragraph = screen.queryByTestId('paragraph');

    expect(typography).not.toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveTextContent('Hello World');
    expect(paragraph?.className).toContain('caption');
  });

  test('renders Typography type body with as', async () => {
    render(
      <Typography data-testid='typography' type='body' as='span'>
        Hello World!
      </Typography>,
    );

    const typography = screen.queryByTestId('typography');

    expect(String(typography?.tagName).toLowerCase()).toBe('span');
  });

  test('renders Typography type caption with as', async () => {
    render(
      <Typography data-testid='typography' type='body' as='span'>
        Hello World!
      </Typography>,
    );

    const typography = screen.queryByTestId('typography');

    expect(String(typography?.tagName).toLowerCase()).toBe('span');
  });
});
