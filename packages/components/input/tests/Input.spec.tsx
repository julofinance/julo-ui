import {
  fireEvent,
  render,
  renderer,
  screen,
  testA11y,
} from '@julo-ui/rtl-utils';

import Input, {
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
} from '../src';
import { FormControl } from '@julo-ui/form-control';

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

  test('should sync InputGroup attribute with Input', () => {
    render(
      <FormControl isInvalid isDisabled isReadOnly>
        <InputGroup data-testid='input-group'>
          <Input data-testid='input' />
        </InputGroup>
      </FormControl>,
    );

    const inputGroup = screen.queryByTestId('input-group');

    expect(inputGroup).toHaveAttribute('data-input-invalid', 'true');
    expect(inputGroup).toHaveAttribute('data-input-disabled', 'true');
    expect(inputGroup).toHaveAttribute('data-input-readonly', 'true');

    fireEvent.focus(screen.getByTestId('input'));

    expect(inputGroup).toHaveAttribute('data-input-focus', 'true');
  });

  test('should apply or remove border radius correctly on input if InputElement and InputAddon exist', () => {
    const jsonOnlyElement = renderer
      .create(
        <InputGroup>
          <InputLeftElement>
            <span>Hello</span>
          </InputLeftElement>
          <Input data-testid='input' />
          <InputRightElement>
            <span>World</span>
          </InputRightElement>
        </InputGroup>,
      )
      .toJSON();

    if (Array.isArray(jsonOnlyElement) || !jsonOnlyElement) return;

    if (!jsonOnlyElement.children) return;

    const [, inputOnlyElement] = jsonOnlyElement.children;

    expect(inputOnlyElement).toHaveStyleRule('border-top-left-radius', '0');
    expect(inputOnlyElement).toHaveStyleRule('border-bottom-left-radius', '0');
    expect(inputOnlyElement).toHaveStyleRule('border-top-right-radius', '0');
    expect(inputOnlyElement).toHaveStyleRule('border-bottom-right-radius', '0');

    const jsonOnlyAddon = renderer
      .create(
        <InputGroup>
          <InputLeftAddon>
            <span>Hello</span>
          </InputLeftAddon>
          <Input data-testid='input' />
          <InputRightAddon>
            <span>World</span>
          </InputRightAddon>
        </InputGroup>,
      )
      .toJSON();

    if (Array.isArray(jsonOnlyAddon) || !jsonOnlyAddon) return;

    if (!jsonOnlyAddon.children) return;

    const [, inputOnlyAddon] = jsonOnlyAddon.children;

    expect(inputOnlyAddon).toHaveStyleRule('border-top-left-radius', '0');
    expect(inputOnlyAddon).toHaveStyleRule('border-bottom-left-radius', '0');
    expect(inputOnlyAddon).toHaveStyleRule('border-top-right-radius', '0');
    expect(inputOnlyAddon).toHaveStyleRule('border-bottom-right-radius', '0');

    const jsonLeftAddonRightElement = renderer
      .create(
        <InputGroup>
          <InputLeftAddon>
            <span>Hello</span>
          </InputLeftAddon>
          <Input data-testid='input' />
          <InputRightElement>
            <span>World</span>
          </InputRightElement>
        </InputGroup>,
      )
      .toJSON();

    if (Array.isArray(jsonLeftAddonRightElement) || !jsonLeftAddonRightElement)
      return;

    if (!jsonLeftAddonRightElement.children) return;

    const [, inputLeftAddonRightElement] = jsonLeftAddonRightElement.children;

    expect(inputLeftAddonRightElement).toHaveStyleRule(
      'border-top-left-radius',
      '0',
    );
    expect(inputLeftAddonRightElement).toHaveStyleRule(
      'border-bottom-left-radius',
      '0',
    );
    expect(inputLeftAddonRightElement).not.toHaveStyleRule(
      'border-top-right-radius',
      '0',
    );
    expect(inputLeftAddonRightElement).not.toHaveStyleRule(
      'border-bottom-right-radius',
      '0',
    );

    const jsonLeftElementRightAddon = renderer
      .create(
        <InputGroup>
          <InputLeftElement>
            <span>Hello</span>
          </InputLeftElement>
          <Input data-testid='input' />
          <InputRightAddon>
            <span>World</span>
          </InputRightAddon>
        </InputGroup>,
      )
      .toJSON();

    if (Array.isArray(jsonLeftElementRightAddon) || !jsonLeftElementRightAddon)
      return;

    if (!jsonLeftElementRightAddon.children) return;

    const [, inputLeftElementRightAddon] = jsonLeftElementRightAddon.children;

    expect(inputLeftElementRightAddon).not.toHaveStyleRule(
      'border-top-left-radius',
      '0',
    );
    expect(inputLeftElementRightAddon).not.toHaveStyleRule(
      'border-bottom-left-radius',
      '0',
    );
    expect(inputLeftElementRightAddon).toHaveStyleRule(
      'border-top-right-radius',
      '0',
    );
    expect(inputLeftElementRightAddon).toHaveStyleRule(
      'border-bottom-right-radius',
      '0',
    );
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
