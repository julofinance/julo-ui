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
    render(<Card variant='default'>card default</Card>);

    screen.getByText('card default');
  });

  test('should render Card with variant border correctly', () => {
    render(<Card variant='border'>card body</Card>);

    screen.getByText('card body');
  });

  test('should render Card with variant filled correctly', () => {
    render(<Card variant='filled'>card filled</Card>);

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

  test('should render Card with Header, Body and Footer correctly', () => {
    render(
      <Card>
        <CardHeader>card header</CardHeader>
        <CardBody>card body</CardBody>
        <CardFooter>card footer</CardFooter>
      </Card>,
    );

    screen.getByText('card header');
    screen.getByText('card body');
    screen.getByText('card footer');
  });

  test('should render Card with Header, Body and Footer and another children correctly', () => {
    render(
      <Card>
        <div>another children</div>
        <CardHeader>card header</CardHeader>
        <CardBody>card body</CardBody>
        <CardFooter>card footer</CardFooter>
      </Card>,
    );

    screen.getByText('another children');
    screen.getByText('card header');
    screen.getByText('card body');
    screen.getByText('card footer');
  });
});
