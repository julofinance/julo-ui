import { render, screen, act, testA11y, waitFor } from '@julo-ui/rtl-utils';

import {
  TooltipContent,
  TooltipPositioner,
  TooltipRoot,
  TooltipRootProps,
  TooltipTrigger,
} from '../src';

const DemoTooltip = (props: Omit<TooltipRootProps, 'children'>) => {
  const { disabled, ...rest } = props;
  return (
    <TooltipRoot disabled={disabled} {...rest}>
      <TooltipTrigger data-testid='trigger' disabled={disabled || false}>
        Hover me
      </TooltipTrigger>
      <TooltipPositioner>
        <TooltipContent>Tooltip label</TooltipContent>
      </TooltipPositioner>
    </TooltipRoot>
  );
};

const trigger = () => screen.getByText('Hover me');
const tooltip = () => screen.queryByText('Tooltip label');

describe('Tooltip', () => {
  test('passes a11y test when hovered', async () => {
    const { user } = render(<DemoTooltip openDelay={0} />);

    await act(() => user.hover(trigger()));
    expect(tooltip()).toBeInTheDocument();

    await testA11y(tooltip()!);
  });

  test('shows on pointerover and closes on pointerleave', async () => {
    const { user } = render(<DemoTooltip openDelay={0} closeDelay={0} />);

    await act(() => user.hover(trigger()));
    expect(tooltip()).toBeInTheDocument();

    await act(() => user.unhover(trigger()));
    await waitFor(() => expect(tooltip()).not.toBeInTheDocument());
  });

  test('should not show on pointerover if disabled is true', async () => {
    const { user } = render(<DemoTooltip disabled />);
    await act(() => user.hover(trigger()));
    expect(tooltip()).not.toBeInTheDocument();
  });

  test('should close on pointerleave if openDelay is set', async () => {
    const { user } = render(<DemoTooltip openDelay={500} />);

    await act(() => user.hover(trigger()));
    expect(tooltip()).not.toBeInTheDocument();

    await act(() => user.unhover(trigger()));
    await waitFor(() => expect(tooltip()).not.toBeInTheDocument());
  });

  test('should call onClose prop on pointerleave', async () => {
    const onClose = jest.fn();
    const { user } = render(<DemoTooltip onClose={onClose} />);

    await act(() => user.hover(trigger()));
    expect(tooltip()).toBeInTheDocument();

    expect(onClose).not.toBeCalled();

    await act(() => user.unhover(trigger()));
    await waitFor(() => expect(onClose).toBeCalledTimes(1));
  });
});
