import { render, renderer, screen, testA11y } from '@julo-ui/rtl-utils';

import Alert, { AlertDescription, AlertIcon, AlertTitle } from '../src';

describe('Accessibility', () => {
  test('passes a11y test in default state', async () => {
    await testA11y(<Alert />);
  });
});

describe('Alert', () => {
  test('should render Alert correctly', () => {
    const { container } = render(<Alert>Hello World</Alert>);
    const svgEl =
      container.firstElementChild?.getAttribute('data-alert-status');

    expect(svgEl).toContain('neutrals');
    screen.getByText('Hello World');
  });

  test('should render Alert with status default correctly', () => {
    const alert = renderer
      .create(<Alert data-testid='alert'>alert default Success</Alert>)
      .toJSON();

    expect(alert).toHaveStyleRule('background', 'var(--colors-neutrals-30)');
    expect(alert).toHaveStyleRule(
      'border',
      '1px solid var(--colors-neutrals-50)',
    );
    expect(alert).toHaveStyleRule('border-radius', '0.5rem');
    expect(alert).toHaveStyleRule('padding', '0.5rem 0.75rem');
    expect(alert).toHaveStyleRule('display', 'flex');
  });

  test('should render Alert with status "info" correctly', () => {
    const alert = renderer
      .create(
        <Alert data-testid='alert' status='info'>
          alert Info
        </Alert>,
      )
      .toJSON();

    expect(alert).toHaveStyleRule('background', 'var(--colors-blue-10)');
    expect(alert).toHaveStyleRule('border', '1px solid var(--colors-blue-20)');
  });

  test('should render Alert with status "warning" correctly', () => {
    const alert = renderer
      .create(
        <Alert data-testid='alert' status='warning'>
          alert Warning
        </Alert>,
      )
      .toJSON();

    expect(alert).toHaveStyleRule('background', 'var(--colors-orange-10)');
    expect(alert).toHaveStyleRule(
      'border',
      '1px solid var(--colors-orange-20)',
    );
  });

  test('should render Alert with status "positive" correctly', () => {
    const alert = renderer
      .create(
        <Alert data-testid='alert' status='positive'>
          alert Positive
        </Alert>,
      )
      .toJSON();

    expect(alert).toHaveStyleRule('background', 'var(--colors-green-10)');
    expect(alert).toHaveStyleRule('border', '1px solid var(--colors-green-20)');
  });

  test('should render Alert with status "negative" correctly', () => {
    const alert = renderer
      .create(
        <Alert data-testid='alert' status='negative'>
          alert Negative
        </Alert>,
      )
      .toJSON();

    expect(alert).toHaveStyleRule('background', 'var(--colors-red-10)');
    expect(alert).toHaveStyleRule('border', '1px solid var(--colors-red-20)');
  });

  test('should render Alert with status "neutrals" correctly', () => {
    const alert = renderer
      .create(
        <Alert data-testid='alert' status='neutrals'>
          alert Neutrals
        </Alert>,
      )
      .toJSON();

    expect(alert).toHaveStyleRule('background', 'var(--colors-neutrals-30)');
    expect(alert).toHaveStyleRule(
      'border',
      '1px solid var(--colors-neutrals-50)',
    );
  });

  test('should render Alert with Title correctly', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
      </Alert>,
    );

    screen.getByText('Alert Title');
  });

  test('should render Alert with Description correctly', () => {
    render(
      <Alert>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>,
    );

    screen.getByText('Alert Description');
  });

  test('should render Alert with Icon and Title correctly', () => {
    const { container } = render(
      <Alert>
        <AlertIcon data-testid='icon' />
        <AlertTitle>Alert Icon and Title</AlertTitle>
      </Alert>,
    );
    const svgEl = container.querySelector('svg');

    expect(svgEl?.getAttribute('data-icon')).toContain('neutrals');
    screen.getByText('Alert Icon and Title');
  });

  test('should render Alert with Icon and Description correctly', () => {
    const { container } = render(
      <Alert>
        <AlertIcon data-testid='icon' />
        <AlertDescription>Alert Icon and Description</AlertDescription>
      </Alert>,
    );
    const svgEl = container.querySelector('svg');

    expect(svgEl?.getAttribute('data-icon')).toContain('neutrals');
    screen.getByText('Alert Icon and Description');
  });

  test('should render Alert with Icon "Positive", Title and Description correctly', () => {
    const { container } = render(
      <Alert status='positive'>
        <AlertIcon data-testid='icon' />
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>,
    );
    const svgEl = container.querySelector('svg');

    expect(svgEl?.getAttribute('data-icon')).toContain('positive');
    screen.getByText('Alert Title');
    screen.getByText('Alert Description');
  });
});
