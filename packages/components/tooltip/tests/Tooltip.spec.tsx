import { render, screen, waitFor, fireEvent } from '@julo-ui/rtl-utils';
import { julo } from '@julo-ui/react';

import { TooltipProps, Tooltip } from '../src';

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

describe('Tooltip attributes', () => {
  const TooltipAttrs = ({ id, ...anchorParams }: TooltipProps) => (
    <>
      <julo.span data-tooltip-id={id} {...anchorParams}>
        Lorem Ipsum
      </julo.span>
      <Tooltip id={id} />
    </>
  );
  test('tooltip without element reference', async () => {
    render(<TooltipAttrs data-tooltip-content='Hello World!' />);
    const anchorElement = screen.getByText('Lorem Ipsum');

    await fireEvent.mouseEnter(anchorElement);

    await waitFor(() => {
      expect(screen.queryByText('Hello World!')).not.toBeInTheDocument();
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  test('basic tooltip', async () => {
    render(
      <TooltipAttrs
        id='basic-example-attr'
        data-tooltip-content='Hello World!'
      />,
    );
    const anchorElement = screen.getByText('Lorem Ipsum');

    await fireEvent.mouseEnter(anchorElement);

    let tooltip = null;

    await waitFor(() => {
      tooltip = screen.getByRole('tooltip');
      expect(tooltip).toHaveAttribute('class');
    });

    expect(anchorElement).toHaveAttribute('data-tooltip-content');
    expect(tooltip).toBeInTheDocument();
  });

  test('tooltip with place', async () => {
    render(
      <TooltipAttrs
        id='example-place-attr'
        data-tooltip-content='Hello World!'
        data-tooltip-place='right'
      />,
    );
    const anchorElement = screen.getByText('Lorem Ipsum');

    await fireEvent.mouseEnter(anchorElement);

    let tooltip = null;

    await waitFor(() => {
      tooltip = screen.getByRole('tooltip');
      expect(tooltip).toHaveAttribute('class');
    });

    expect(anchorElement).toHaveAttribute('data-tooltip-place');
    expect(anchorElement).toHaveAttribute('data-tooltip-content');
    expect(tooltip).toBeInTheDocument();
  });
});

describe('tooltip props', () => {
  const TooltipProps = ({ id, ...tooltipParams }: TooltipProps) => (
    <>
      <button id={id}>Lorem Ipsum</button>
      <Tooltip {...tooltipParams} />
    </>
  );

  test('tooltip without element reference', async () => {
    render(<TooltipProps content='Hello World!' />);
    const anchorElement = screen.getByText('Lorem Ipsum');

    await fireEvent.mouseEnter(anchorElement);

    await waitFor(() => {
      expect(screen.queryByText('Hello World!')).not.toBeInTheDocument();
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });

  test('basic tooltip', async () => {
    render(
      <TooltipProps
        id='basic-example'
        anchorSelect='#basic-example'
        content='Hello World!'
      />,
    );
    const anchorElement = screen.getByText('Lorem Ipsum');

    await fireEvent.mouseEnter(anchorElement);

    let tooltip = null;

    await waitFor(() => {
      tooltip = screen.getByRole('tooltip');
      expect(tooltip).toHaveAttribute('class');
    });

    expect(tooltip).toBeInTheDocument();
  });

  test('tooltip with place', async () => {
    render(
      <TooltipProps
        id='example-place'
        anchorSelect='#example-place'
        content='Hello World!'
        place='right'
      />,
    );
    const anchorElement = screen.getByText('Lorem Ipsum');

    await fireEvent.mouseEnter(anchorElement);

    let tooltip = null;

    await waitFor(() => {
      tooltip = screen.getByRole('tooltip');
      expect(tooltip).toHaveAttribute('class');
    });

    expect(tooltip).toBeInTheDocument();
  });

  test('clickable tooltip', async () => {
    const id = 'example-clickable';

    const mockCallBack = jest.fn();
    render(
      <>
        <span id={id}>Lorem Ipsum</span>
        <Tooltip id={id} anchorSelect={`#${id}`} clickable>
          <button onClick={mockCallBack}>button</button>
        </Tooltip>
      </>,
    );
    const anchorElement = screen.getByText('Lorem Ipsum');

    await fireEvent.mouseEnter(anchorElement);

    let tooltip = null;

    await waitFor(() => {
      tooltip = screen.getByRole('tooltip');
      expect(tooltip).toHaveAttribute('class');
    });

    await fireEvent.click(screen.getByText('button'));

    expect(tooltip).toBeInTheDocument();
    expect(screen.getByText('button')).toBeInTheDocument();
    expect(mockCallBack).toHaveBeenCalled();
  });

  test('tooltip with custom position', async () => {
    render(
      <TooltipProps
        id='example-position'
        anchorSelect='#example-position'
        content='Hello World!'
        position={{ x: 0, y: 0 }}
      />,
    );
    const anchorElement = screen.getByText('Lorem Ipsum');

    await fireEvent.mouseEnter(anchorElement);

    let tooltip = null;

    await waitFor(() => {
      tooltip = screen.getByRole('tooltip');
      expect(tooltip).toHaveAttribute('class');
    });

    expect(tooltip).toBeInTheDocument();
  });
});
