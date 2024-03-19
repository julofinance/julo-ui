import { render, renderer, screen, testA11y } from '@julo-ui/rtl-utils';

import Card, { CardHeader, CardBody, CardFooter } from '../src';

describe('Accessibility', () => {
  test('passes a11y test in default state', async () => {
    await testA11y(<Card />);
  });
});

describe('Card', () => {
  test('should render Card correctly', () => {
    render(<Card>Hello World</Card>);

    screen.getByText('Hello World');
  });

  test('should render Card with variant default correctly', () => {
    const card = renderer
      .create(
        <Card data-testid='card' variant='default'>
          card default
        </Card>,
      )
      .toJSON();

    expect(card).toHaveStyleRule(
      'background-color',
      'var(--colors-neutrals-10)',
    );
    expect(card).toHaveStyleRule('box-shadow', 'var(--shadows-md)');
  });

  test('should render Card with variant border correctly', () => {
    const card = renderer
      .create(
        <Card data-testid='card' variant='border'>
          card body
        </Card>,
      )
      .toJSON();

    expect(card).toHaveStyleRule('background', 'var(--colors-neutrals-10)');
    expect(card).toHaveStyleRule(
      'border',
      '1px solid var(--colors-neutrals-30)',
    );
  });

  test('should render Card with variant filled correctly', () => {
    const card = renderer
      .create(
        <Card data-testid='card' variant='filled'>
          card filled
        </Card>,
      )
      .toJSON();

    expect(card).toHaveStyleRule('background', 'var(--colors-neutrals-20)');
  });

  test('should render Card with Header correctly', () => {
    render(
      <Card>
        <CardHeader>card header</CardHeader>
      </Card>,
    );

    screen.getByText('card header');
  });

  test('should render Card with Body correctly', () => {
    render(
      <Card>
        <CardBody>card body</CardBody>
      </Card>,
    );

    screen.getByText('card body');
  });

  test('should render Card with Footer correctly', () => {
    render(
      <Card>
        <CardFooter>card footer</CardFooter>
      </Card>,
    );

    screen.getByText('card footer');
  });

  test('should render Card default with Header, Body and Footer and another children correctly', () => {
    const { getByTestId } = render(
      <Card data-testid='card'>
        <CardHeader>card header</CardHeader>
        <div>another children</div>
        <CardBody data-testid='body'>card body</CardBody>
        <CardFooter data-testid='footer'>card footer</CardFooter>
      </Card>,
    );

    const card = getByTestId('card');
    const body = getByTestId('body');
    const footer = getByTestId('footer');

    expect(card).toHaveStyleRule(
      'background-color',
      'var(--colors-neutrals-10)',
    );
    expect(card).toHaveStyleRule('box-shadow', 'var(--shadows-md)');
    expect(card).toHaveStyleRule('padding-top', '0.75rem');
    expect(card).toHaveStyleRule('padding-bottom', '0.75rem');
    expect(body).toHaveStyle({ 'margin-top': '' });
    expect(footer).toHaveStyle({ 'margin-top': '0.75rem' });
  });

  test('should render Card default with Header, Body and Footer correctly', () => {
    const { getByTestId } = render(
      <Card data-testid='card'>
        <CardHeader>card header</CardHeader>
        <CardBody data-testid='body'>card body</CardBody>
        <CardFooter data-testid='footer'>card footer</CardFooter>
      </Card>,
    );

    const card = getByTestId('card');
    const body = getByTestId('body');
    const footer = getByTestId('footer');

    expect(card).toHaveStyleRule(
      'background-color',
      'var(--colors-neutrals-10)',
    );
    expect(card).toHaveStyleRule('box-shadow', 'var(--shadows-md)');
    expect(card).toHaveStyleRule('padding-top', '0.75rem');
    expect(card).toHaveStyleRule('padding-bottom', '0.75rem');
    expect(body).toHaveStyle({ 'margin-top': '0.75rem' });
    expect(footer).toHaveStyle({ 'margin-top': '0.75rem' });
  });
});
