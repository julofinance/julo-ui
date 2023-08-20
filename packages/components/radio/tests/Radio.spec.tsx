import { FormControl, FormHelperText, FormLabel } from '@julo-ui/form-control';
import { render, screen, fireEvent } from '@julo-ui/rtl-utils';

import Radio, { useRadio, UseRadioProps } from '../src';

describe('Radio', () => {
  test('has proper aria and data attributes', async () => {
    const Component = (props: UseRadioProps = {}) => {
      const { getRadioProps, getInputProps, getRootProps } = useRadio(props);

      return (
        <label data-testid='container' {...getRootProps()}>
          <input data-testid='input' {...getInputProps()} />
          <div data-testid='checkbox' {...getRadioProps()} />
        </label>
      );
    };
    const utils = render(<Component name='name' value='' id='id' />);

    let input = utils.getByTestId('input');
    let checkbox = utils.getByTestId('checkbox');
    let container = utils.getByTestId('container');

    expect(input).toHaveAttribute('name', 'name');
    expect(input).toHaveAttribute('id', 'id');
    expect(input).toHaveAttribute('value', '');
    expect(input).not.toBeDisabled();
    expect(input).not.toHaveAttribute('aria-required');
    expect(input).not.toHaveAttribute('required');
    expect(input).not.toHaveAttribute('aria-invalid');
    expect(input).not.toHaveAttribute('aria-disabled');
    expect(checkbox).toHaveAttribute('aria-hidden', 'true');
    expect(checkbox).not.toHaveAttribute('data-active');
    expect(checkbox).not.toHaveAttribute('data-hover');
    expect(checkbox).not.toHaveAttribute('data-checked');
    expect(checkbox).not.toHaveAttribute('data-focus');
    expect(checkbox).not.toHaveAttribute('data-readonly');
    expect(container).not.toHaveAttribute('data-invalid');
    expect(container).not.toHaveAttribute('data-disabled');

    // render with various flags enabled
    utils.rerender(<Component isDisabled isInvalid isReadOnly isRequired />);

    input = utils.getByTestId('input');
    checkbox = utils.getByTestId('checkbox');
    container = utils.getByTestId('container');

    expect(input).toHaveAttribute('aria-required');
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('aria-invalid');
    expect(input).toHaveAttribute('aria-disabled');
    expect(input).toBeDisabled();
    expect(checkbox).toHaveAttribute('data-readonly');
    expect(container).toHaveAttribute('data-invalid');
    expect(container).toHaveAttribute('data-disabled');

    // input is not truly disabled if focusable
    utils.rerender(<Component isDisabled isFocusable />);

    input = utils.getByTestId('input');

    expect(input).not.toBeDisabled();
  });

  test('handles events and callbacks correctly', () => {
    const hookProps = { onChange: jest.fn() };
    const checkboxProps = {
      onMouseDown: jest.fn(),
      onMouseUp: jest.fn(),
    };
    const inputProps = {
      onChange: jest.fn(),
      onBlur: jest.fn(),
      onFocus: jest.fn(),
      onKeyDown: jest.fn(),
      onKeyUp: jest.fn(),
    };
    const Component = () => {
      const { getRadioProps, getInputProps, getRootProps } =
        useRadio(hookProps);

      return (
        <label data-testid='container' {...getRootProps()}>
          <input data-testid='input' {...getInputProps(inputProps)} />
          <div data-testid='checkbox' {...getRadioProps(checkboxProps)} />
        </label>
      );
    };
    const utils = render(<Component />);
    const input = utils.getByTestId('input');
    const checkbox = utils.getByTestId('checkbox');
    const container = utils.getByTestId('container');
    expect(checkbox).not.toHaveAttribute('data-checked');
    expect(container).not.toHaveAttribute('data-checked');

    // mouse up and down
    fireEvent.mouseDown(checkbox);
    expect(checkbox).toHaveAttribute('data-active');
    expect(checkboxProps.onMouseDown).toHaveBeenCalled();

    fireEvent.mouseUp(checkbox);
    expect(checkbox).not.toHaveAttribute('data-active');
    expect(checkboxProps.onMouseUp).toHaveBeenCalled();

    // on change
    fireEvent.click(input);
    expect(input).toBeChecked();
    expect(checkbox).toHaveAttribute('data-checked');
    expect(container).toHaveAttribute('data-checked');
    expect(hookProps.onChange).toHaveBeenCalled();
    expect(inputProps.onChange).toHaveBeenCalled();

    // blur and focus
    fireEvent.focus(input);
    expect(checkbox).toHaveAttribute('data-focus');
    expect(inputProps.onFocus).toHaveBeenCalled();

    fireEvent.blur(input);
    expect(checkbox).not.toHaveAttribute('data-focus');
    expect(inputProps.onFocus).toHaveBeenCalled();

    // key down and key up
    fireEvent.keyDown(input, { key: ' ', keyCode: 32 });
    expect(checkbox).toHaveAttribute('data-active');
    expect(inputProps.onKeyDown).toHaveBeenCalled();

    fireEvent.keyUp(input, { key: ' ', keyCode: 32 });
    expect(checkbox).not.toHaveAttribute('data-active');
    expect(inputProps.onKeyUp).toHaveBeenCalled();
  });

  test('should derive values from surrounding FormControl', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    render(
      <FormControl
        id='radio'
        isRequired
        isInvalid
        isDisabled
        isReadOnly
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <FormLabel>Radio</FormLabel>
        <Radio value='Chakra UI'>Chakra UI</Radio>
        <FormHelperText>Select a value</FormHelperText>
      </FormControl>,
    );

    const radio = screen.getByRole('radio');

    expect(radio).toHaveAttribute('id', 'radio');
    expect(radio).toHaveAttribute('aria-invalid', 'true');
    expect(radio).toHaveAttribute('aria-required', 'true');
    expect(radio).toHaveAttribute('data-readonly', '');
    expect(radio).toHaveAttribute('aria-invalid', 'true');

    fireEvent.focus(radio);
    expect(onFocus).toHaveBeenCalled();

    fireEvent.blur(radio);
    expect(onBlur).toHaveBeenCalled();
  });
});
