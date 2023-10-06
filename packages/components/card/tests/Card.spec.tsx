import { render, screen, testA11y } from '@julo-ui/rtl-utils';

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
    render(
      <Card data-testid='card' variant='default'>
        card default
      </Card>,
    );

    const card = screen.getByTestId('card');

    expect(card).toHaveStyle({
      backgroundColor: 'var(--colors-neutrals-10)',
      borderColor: '',
      boxShadow: 'var(--shadows-md)',
    });

    screen.getByText('card default');
  });

  test('should render Card with variant border correctly', () => {
    render(
      <Card data-testid='card' variant='border'>
        card body
      </Card>,
    );

    const card = screen.getByTestId('card');

    expect(card).toHaveStyle({
      background: 'var(--colors-neutrals-10)',
      border: '1px solid var(--colors-neutrals-30)',
    });

    screen.getByText('card body');
  });

  test('should render Card with variant filled correctly', () => {
    render(
      <Card data-testid='card' variant='filled'>
        card filled
      </Card>,
    );

    const card = screen.getByTestId('card');

    expect(card).toHaveStyle({
      background: 'var(--colors-neutrals-20)',
    });

    screen.getByText('card filled');
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
    render(
      <Card data-testid='card'>
        <CardHeader data-testid='card-header'>card header</CardHeader>
        <div data-testid='another-child'>another children</div>
        <CardBody data-testid='card-body'>card body</CardBody>
        <CardFooter data-testid='card-footer'>card footer</CardFooter>
      </Card>,
    );

    const card = screen.getByTestId('card');
    const cardHeader = screen.getByTestId('card-header');
    const cardBody = screen.getByTestId('card-body');
    const cardFooter = screen.getByTestId('card-footer');
    const anotherChild = screen.getByTestId('another-child');

    expect(card).toHaveStyle({
      backgroundColor: 'var(--colors-neutrals-10)',
      borderColor: '',
      boxShadow: 'var(--shadows-md)',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
    });

    expect(cardHeader).not.toHaveStyle({
      marginTop: '0.75rem',
    });

    expect(cardBody).toHaveStyle({
      marginTop: '0.75rem',
    });

    expect(cardFooter).toHaveStyle({
      marginTop: '0.75rem',
    });

    expect(anotherChild).toHaveStyle({
      marginTop: '0.75rem',
    });

    screen.getByText('another children');
    screen.getByText('card header');
    screen.getByText('card body');
    screen.getByText('card footer');
  });
});
