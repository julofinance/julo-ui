import { fireEvent, render, screen, testA11y } from '@julo-ui/rtl-utils';

import { PropsOf, forwardRef, julo } from '@julo-ui/system';

import FormControl, {
  FormControlOptions,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  useFormControl,
} from '../src';

type InputProps = Omit<
  PropsOf<typeof julo.input>,
  'disabled' | 'required' | 'readOnly'
> &
  FormControlOptions;

const Input: React.FC<InputProps> = forwardRef<InputProps, 'input'>(
  (props, ref) => {
    const inputProps = useFormControl<HTMLInputElement>(props);
    return <julo.input ref={ref} {...inputProps} />;
  },
);

function RenderFormControl(props: FormControlOptions = {}) {
  return (
    <FormControl data-testid='control' id='firstname' {...props}>
      <FormLabel data-testid='label'>First Name</FormLabel>
      <Input data-testid='input' />
      <FormHelperText data-testid='helper'>Helper Text</FormHelperText>
      <FormErrorMessage data-testid='error'>
        Your First Name is invalid
      </FormErrorMessage>
    </FormControl>
  );
}

describe('Accessibility', () => {
  test('passes a11y test in default state', async () => {
    await testA11y(<RenderFormControl />);
  });

  test('passes a11y test when required', async () => {
    await testA11y(<RenderFormControl isRequired />);
  });

  test('passes a11y test when invalid', async () => {
    await testA11y(<RenderFormControl isInvalid />);
  });
});

describe('FormControl', () => {
  test('should show error message only when invalid and not disabled or readonly', () => {
    const { rerender } = render(<RenderFormControl />);

    expect(screen.queryByTestId('helper')).toBeInTheDocument();
    expect(screen.queryByTestId('error')).not.toBeInTheDocument();

    rerender(<RenderFormControl isInvalid />);

    expect(screen.queryByTestId('helper')).not.toBeInTheDocument();
    expect(screen.queryByTestId('error')).toBeInTheDocument();

    rerender(<RenderFormControl isInvalid isDisabled />);

    expect(screen.queryByTestId('helper')).toBeInTheDocument();
    expect(screen.queryByTestId('error')).not.toBeInTheDocument();

    rerender(<RenderFormControl isInvalid isReadOnly />);

    expect(screen.queryByTestId('helper')).toBeInTheDocument();
    expect(screen.queryByTestId('error')).not.toBeInTheDocument();
  });

  test('should render requiredIndicator when required', () => {
    const { rerender } = render(<RenderFormControl isRequired />);

    const indicator = screen.getByRole('presentation', { hidden: true });

    expect(indicator).toBeInTheDocument();

    rerender(<RenderFormControl />);

    expect(indicator).not.toBeInTheDocument();
  });

  test('useFormControl trigger provided input callbacks', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    render(
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input data-testid='input' onFocus={onFocus} onBlur={onBlur} />
      </FormControl>,
    );

    const input = screen.getByTestId('input');

    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(onFocus).toHaveBeenCalled();
    expect(onBlur).toHaveBeenCalled();
  });

  test('has proper aria attributes', async () => {
    const { rerender } = render(<RenderFormControl />);

    let input = screen.getByTestId('input');

    expect(input).toHaveAttribute('aria-describedby', 'firstname-helper-text');
    expect(input).not.toHaveAttribute('aria-invalid');
    expect(input).not.toHaveAttribute('aria-required');
    expect(input).not.toHaveAttribute('aria-readonly');

    rerender(<RenderFormControl isRequired isInvalid isReadOnly isLoading />);

    input = screen.getByTestId('input');
    const indicator = screen.getByRole('presentation', { hidden: true });

    expect(input).toHaveAttribute('aria-describedby', 'firstname-helper-text');
    expect(input).toHaveAttribute('aria-invalid');
    expect(input).toHaveAttribute('aria-required', 'true');
    expect(input).toHaveAttribute('aria-readonly', 'true');
    expect(input).toHaveAttribute('aria-busy', 'true');
    expect(indicator).toHaveAttribute('aria-hidden', 'true');

    rerender(<RenderFormControl isRequired isInvalid />);

    input = screen.getByTestId('input');
    const errorMessage = screen.getByTestId('error');

    expect(input).toHaveAttribute('aria-describedby', 'firstname-feedback');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(errorMessage).toHaveAttribute('aria-live', 'polite');
  });

  test('label has correct data attributes', () => {
    const { rerender } = render(
      <RenderFormControl
        isDisabled
        isRequired
        isInvalid
        isReadOnly
        isLoading
      />,
    );

    fireEvent.focus(screen.getByTestId('input'));

    let label = screen.getByTestId('label');
    expect(label).toHaveAttribute('data-focus');
    expect(label).not.toHaveAttribute('data-invalid');
    expect(label).toHaveAttribute('data-readonly');
    expect(label).toHaveAttribute('data-busy');

    rerender(<RenderFormControl isRequired isInvalid />);

    label = screen.getByTestId('label');
    expect(label).toHaveAttribute('data-invalid');
  });

  test('has the correct role attributes', () => {
    render(<RenderFormControl isRequired />);

    const control = screen.getByTestId('control');

    expect(
      screen.getByRole('presentation', { hidden: true }),
    ).toBeInTheDocument();
    expect(screen.getByRole('group')).toEqual(control);
  });

  test('should provide custom aria-describedby', () => {
    const { rerender } = render(<Input aria-describedby='custom-describe' />);

    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      'custom-describe',
    );

    rerender(
      <FormControl id='name'>
        <Input aria-describedby='extra-helper-text' />
        <FormHelperText>Main Helper</FormHelperText>
        <p id='extra-helper-text'>Extra Helper</p>
      </FormControl>,
    );

    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      'extra-helper-text name-helper-text',
    );
  });

  test('should override requiredIndicator when pass requiredIndicator', () => {
    render(
      <FormControl isRequired>
        <FormLabel requiredIndicator={' (require)'}>Tes</FormLabel>
      </FormControl>,
    );

    expect(screen.getByText('Tes (require)')).toBeInTheDocument();
  });

  test('should render optionalIndicator', () => {
    render(
      <FormControl>
        <FormLabel optionalIndicator={' (optional)'}>Tes</FormLabel>
      </FormControl>,
    );

    expect(screen.getByText('Tes (optional)')).toBeInTheDocument();
  });
});
