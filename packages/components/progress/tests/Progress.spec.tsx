import { render, testA11y } from '@julo-ui/rtl-utils';

import { CircularProgress, Progress } from '../src';

test('Progress renders correctly', async () => {
  const { container } = render(
    <div>
      <Progress aria-label='Account Usage' value={20} />
      <Progress aria-label='Account Usage' hasStripe value={40} />
      <Progress aria-label='Account Usage' hasStripe isAnimated value={80} />
      <Progress
        aria-label='Account Usage'
        aria-valuetext='Value text'
        value={20}
      />
    </div>,
  );
  await testA11y(container);
});

test('CircularProgress renders correctly', async () => {
  const { container } = render(
    <div>
      <CircularProgress aria-label='Account Usage' size='60px' value={20} />
      <CircularProgress
        aria-label='Account Usage'
        size='120px'
        trackColor='transparent'
        thickness={10}
        value={60}
      />
    </div>,
  );
  await testA11y(container);
});

test('Progress: has the proper aria, data, and role attributes', () => {
  const { getByRole, rerender } = render(
    <Progress color='green' aria-valuetext='text' value={20} />,
  );

  let progress = getByRole('progressbar');

  expect(progress).not.toHaveAttribute('data-indeterminate');
  expect(progress).toHaveAttribute('aria-valuemax', '100');
  expect(progress).toHaveAttribute('aria-valuemin', '0');
  expect(progress).toHaveAttribute('aria-valuenow', '20');
  expect(progress).toHaveAttribute('aria-valuetext', 'text');

  // rerender as indeterminate
  rerender(<Progress color='green' isIndeterminate />);

  progress = getByRole('progressbar');

  expect(progress).toHaveAttribute('data-indeterminate');
  expect(progress).not.toHaveAttribute('aria-valuenow');
});

test('CircularProgress: has the proper aria, data, and role attributes', () => {
  const props = {
    trackColor: 'transparent',
    valueText: 'value',
    thickness: 10,
    value: 20,
  };
  const utils = render(<CircularProgress {...props} />);

  let progress = utils.getByRole('progressbar');

  expect(progress).not.toHaveAttribute('data-indeterminate');
  expect(progress).toHaveAttribute('aria-valuemax', '100');
  expect(progress).toHaveAttribute('aria-valuemin', '0');
  expect(progress).toHaveAttribute('aria-valuenow', '20');
  expect(progress).toHaveAttribute('aria-valuetext', 'value');

  // rerender as indeterminate
  utils.rerender(<CircularProgress {...props} isIndeterminate />);

  progress = utils.getByRole('progressbar');

  expect(progress).toHaveAttribute('data-indeterminate');
  expect(progress).not.toHaveAttribute('aria-valuenow');

  // rerender with getValueText function
  utils.rerender(
    <CircularProgress
      {...props}
      getValueText={(value, percent) => `${value} (${percent}%)`}
    />,
  );

  progress = utils.getByRole('progressbar');

  expect(progress).toHaveAttribute('aria-valuetext', '20 (20%)');
});

test('Progress as meter', async () => {
  const { getByRole, queryByRole, container } = render(
    <Progress color='green' value={20} role='meter' aria-label='Usage' />,
  );

  expect(getByRole('meter')).toBeVisible();
  expect(queryByRole('progressbar')).toBeNull();

  await testA11y(container);
});
