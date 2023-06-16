import { render, screen, testA11y } from '@julo-ui/rtl-utils';

import Input, { InputGroup, InputLeftElement, InputRightElement } from '../src';

describe('Accesibility', () => {
  test('should passes a11y test', async () => {
    await testA11y(<Input />, {
      axeOptions: {
        rules: {
          label: { enabled: false },
        },
      },
    });
  });
});

describe('Input', () => {
  test('should render Input correctly', () => {
    render(<Input data-testid='input' />);

    const input = screen.queryByTestId('input');
    expect(input).toBeInTheDocument();
  });

  test('should render element inside InputGroup correctly', () => {
    render(
      <InputGroup>
        <InputLeftElement>
          <span>Hello</span>
        </InputLeftElement>
        <Input />
        <InputRightElement>
          <span>World</span>
        </InputRightElement>
      </InputGroup>,
    );

    expect(screen.queryByText('Hello')).toBeInTheDocument();
    expect(screen.queryByText('World')).toBeInTheDocument();
  });

  test('should render invalid input correctly', () => {
    render(<Input isInvalid />);

    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  test('should render disabled input correctly', () => {
    render(<Input disabled />);

    expect(screen.getByRole('textbox')).toHaveAttribute('disabled');
  });

  test('should render readonly input correctly', () => {
    render(<Input readOnly />);

    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-readonly',
      'true',
    );
  });
});
