import { julo } from '@julo-ui/system';
import { render, screen } from '@julo-ui/rtl-utils';

import TextField from '../src';

describe('TextField', () => {
  test('should render TextField correctly', () => {
    render(<TextField data-testid='text-field' />);

    const textField = screen.getByTestId('text-field');
    expect(textField).toBeInTheDocument();
  });

  test('should render textarea on multiline', () => {
    render(<TextField data-testid='text-field' multiline />);

    expect(document.querySelector('input')).not.toBeInTheDocument();
    expect(document.querySelector('textarea')).toBeInTheDocument();
  });

  test('should hide replace element of rightElement on isLoading', () => {
    render(
      <TextField
        data-testid='text-field'
        multiline
        isLoading
        rightElement={<julo.div data-testid='right-element'>Test</julo.div>}
      />,
    );

    expect(screen.queryByTestId('right-element')).not.toBeInTheDocument();
  });

  test('should show element of rightElement on isLoading but hideLoadingIndicator', () => {
    render(
      <TextField
        data-testid='text-field'
        multiline
        isLoading
        rightElement={<julo.div data-testid='right-element'>Test</julo.div>}
        hideLoadingIndicator
      />,
    );

    expect(screen.queryByTestId('right-element')).toBeInTheDocument();
  });
});
