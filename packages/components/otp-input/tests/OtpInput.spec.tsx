import { fireEvent, render, screen, waitFor } from '@julo-ui/rtl-utils';
import type { HTMLJuloProps } from '@julo-ui/system';

import {
  OtpInputProps,
  OtpInputProvider,
  useOtpInput,
  useOtpInputField,
} from '../src';

function Input(props: HTMLJuloProps<'input'>) {
  const inputProps = useOtpInputField(props);
  return <input {...inputProps} />;
}

function CustomOtpInput(props: OtpInputProps) {
  const context = useOtpInput(props);

  return (
    <OtpInputProvider value={context}>
      <Input data-testid='1' />
      <Input data-testid='2' />
      <Input data-testid='3' />
      <button onClick={() => context.clearValue()}>Clear</button>
    </OtpInputProvider>
  );
}

describe('OtpInput', () => {
  test('has the proper aria attributes', async () => {
    render(<CustomOtpInput />);
    expect(
      screen.queryAllByLabelText('Please enter your otp code'),
    ).toHaveLength(3);
  });

  test('can autofocus the first field', async () => {
    render(<CustomOtpInput autoFocus />);
    await waitFor(() => expect(screen.getByTestId('1')).toHaveFocus());
  });

  test('typing in an input automatically moves focus to the next item', async () => {
    const { user } = render(<CustomOtpInput />);

    await user.type(screen.getByTestId('1'), '1');
    await waitFor(() => expect(screen.getByTestId('2')).toHaveFocus());

    await user.type(screen.getByTestId('2'), '2');
    await waitFor(() => expect(screen.getByTestId('3')).toHaveFocus());
  });

  test('pressing backspace moves to the previous input and clears', async () => {
    const { user } = render(<CustomOtpInput />);

    // type in the first two inputs
    await user.type(screen.getByTestId('1'), '1');
    await user.type(screen.getByTestId('2'), '2');

    // verify that 3rd input is active
    await waitFor(() => expect(screen.getByTestId('3')).toHaveFocus());

    // send backspace to the 3rd input
    fireEvent.keyDown(screen.getByTestId('3'), { key: 'Backspace' });

    // verify that 2nd input is active and value was cleared
    await waitFor(() => expect(screen.getByTestId('2')).toHaveFocus());
    expect(screen.getByTestId('2')).toHaveValue('');
  });

  test('filling out all inputs calls the complete callback', async () => {
    const onComplete = jest.fn();
    const { user } = render(<CustomOtpInput onComplete={onComplete} />);

    await user.type(screen.getByTestId('1'), '1');
    await user.type(screen.getByTestId('2'), '2');
    await user.type(screen.getByTestId('3'), '3');

    expect(onComplete).toHaveBeenCalledWith('123');
  });

  test('can clear all input', async () => {
    const { user } = render(<CustomOtpInput />);

    // fill out the first two
    await user.type(screen.getByTestId('1'), '1');
    await user.type(screen.getByTestId('2'), '2');

    // click the clear button
    fireEvent.click(screen.getByRole('button'));

    // verify that input values are blank
    expect(screen.getByTestId('1')).toHaveValue('');
    expect(screen.getByTestId('2')).toHaveValue('');
  });

  test('should have "one-time-code" autocomplete on fields by default', async () => {
    render(<CustomOtpInput />);

    expect(screen.getByTestId('1')).toHaveAttribute(
      'autocomplete',
      'one-time-code',
    );
    expect(screen.getByTestId('2')).toHaveAttribute(
      'autocomplete',
      'one-time-code',
    );
    expect(screen.getByTestId('3')).toHaveAttribute(
      'autocomplete',
      'one-time-code',
    );
  });

  test('otp=false disabled "one-time-code" autocomplete on fields', async () => {
    render(<CustomOtpInput otp={false} />);

    expect(screen.getByTestId('1')).not.toHaveAttribute(
      'autocomplete',
      'one-time-code',
    );
    expect(screen.getByTestId('2')).not.toHaveAttribute(
      'autocomplete',
      'one-time-code',
    );
    expect(screen.getByTestId('3')).not.toHaveAttribute(
      'autocomplete',
      'one-time-code',
    );
  });
});
