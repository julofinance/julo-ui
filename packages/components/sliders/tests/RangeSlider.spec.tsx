import { render, testA11y, screen, focus, fireEvent } from '@julo-ui/rtl-utils';

import {
  RangeSlider,
  RangeSliderInnerTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '../src';

const HorizontalSlider = () => {
  return (
    <RangeSlider
      aria-label={['leftThumb', 'rightThumb']}
      min={1}
      max={100}
      defaultValue={[40, 80]}
    >
      <RangeSliderTrack>
        <RangeSliderInnerTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
};

const HorizontalSliderWithStackedThumbs = () => {
  return (
    <RangeSlider min={0} max={100} defaultValue={[0, 0, 100]}>
      <RangeSliderTrack data-testid='range-slider-track'>
        <RangeSliderInnerTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
      <RangeSliderThumb index={2} />
    </RangeSlider>
  );
};

const getThumbs = () => screen.getAllByRole('slider');

describe('Accessibility', () => {
  test('passes a11y test', async () => {
    await testA11y(<HorizontalSlider />);
  });
});

describe('RangeSlider', () => {
  test('should move the left thumb with an arrow key', async () => {
    const { user } = render(<HorizontalSlider />);

    const [leftThumb] = getThumbs();

    focus(leftThumb);

    await user.keyboard('[ArrowRight]');
    expect(leftThumb).toHaveAttribute('aria-valuenow', '41');
  });

  test('should move the right thumb with an arrow key', async () => {
    const { user } = render(<HorizontalSlider />);

    const [, rightThumb] = getThumbs();

    focus(rightThumb);

    await user.keyboard('[ArrowRight]');
    expect(rightThumb).toHaveAttribute('aria-valuenow', '81');
  });

  test('should increment a thumb by 10 position pressing the page-up key', async () => {
    const { user } = render(<HorizontalSlider />);

    const [leftThumb] = getThumbs();

    focus(leftThumb);

    await user.keyboard('[PageUp]');
    expect(leftThumb).toHaveAttribute('aria-valuenow', '50');
  });

  test('should decrement a thumb by 10 position pressing the page-down key', async () => {
    const { user } = render(<HorizontalSlider />);

    const [leftThumb] = getThumbs();
    focus(leftThumb);

    await user.keyboard('[PageDown]');
    expect(leftThumb).toHaveAttribute('aria-valuenow', '30');
  });

  test('should set a thumb to its minimum value when pressing the home key', async () => {
    const { user } = render(<HorizontalSlider />);

    const [, rightThumb] = getThumbs();
    focus(rightThumb);

    await user.keyboard('[Home]');

    // The minimum value for the right thumb is whatever value
    // the left thumb currently is
    expect(rightThumb).toHaveAttribute('aria-valuenow', '40');
  });

  test('should set a thumb to its maximum value when pressing the end key', async () => {
    const { user } = render(<HorizontalSlider />);

    const [, rightThumb] = getThumbs();
    focus(rightThumb);

    await user.keyboard('[End]');

    expect(rightThumb).toHaveAttribute('aria-valuenow', '100');
  });

  test('should move the correct thumb when user clicks the track in case of stacked thumbs', () => {
    render(<HorizontalSliderWithStackedThumbs />);

    const rangeSliderTrack = screen.getByTestId('range-slider-track');

    // getBoundingClientRect is not supported by JSDOM
    // its implementation needs to be mocked
    jest.spyOn(rangeSliderTrack, 'getBoundingClientRect').mockImplementation(
      () =>
        ({
          left: 0,
          top: 0,
          width: 100,
          height: 20,
        } as DOMRect),
    );

    const clickCoordinates = { clientX: 20, clientY: 10 };

    fireEvent.pointerDown(rangeSliderTrack, clickCoordinates);

    const [firstThumb, secondThumb, thirdThumb] = getThumbs();

    expect(firstThumb).toHaveAttribute('aria-valuenow', '0');
    expect(secondThumb).toHaveAttribute('aria-valuenow', '20');
    expect(thirdThumb).toHaveAttribute('aria-valuenow', '100');
  });

  test("shouldn't limit value if exceed bound", async () => {
    const { user } = render(
      <RangeSlider
        aria-label={['left-thumb', 'middle-thumb', 'right-thumb']}
        defaultValue={[25, 50, 75]}
      >
        <RangeSliderTrack>
          <RangeSliderInnerTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} children={null} />
        <RangeSliderThumb index={1} children={null} />
        <RangeSliderThumb index={2} children={null} />
      </RangeSlider>,
    );

    const [leftThumb, middleThumb] = getThumbs();

    focus(leftThumb);

    await user.keyboard('[PageUp]');
    await user.keyboard('[PageUp]');
    await user.keyboard('[PageUp]');

    expect(leftThumb).toHaveAttribute('aria-valuenow', '50');
    expect(middleThumb).toHaveAttribute('aria-valuenow', '55');
  });

  test('should limit value if exceed bound when disableSwap', async () => {
    const { user } = render(
      <RangeSlider
        aria-label={['left-thumb', 'middle-thumb', 'right-thumb']}
        defaultValue={[25, 50, 75]}
        isDisableSwap
      >
        <RangeSliderTrack>
          <RangeSliderInnerTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} children={null} />
        <RangeSliderThumb index={1} children={null} />
        <RangeSliderThumb index={2} children={null} />
      </RangeSlider>,
    );

    const [leftThumb, middleThumb] = getThumbs();

    focus(leftThumb);

    await user.keyboard('[PageUp]');
    await user.keyboard('[PageUp]');
    await user.keyboard('[PageUp]');

    expect(leftThumb).toHaveAttribute('aria-valuenow', '50');
    expect(middleThumb).not.toHaveAttribute('aria-valuenow', '55');
  });

  test('should remove default icon from thumb on passing null to RangeSliderThumb children', () => {
    render(
      <RangeSlider>
        <RangeSliderTrack>
          <RangeSliderInnerTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} children={null} />
        <RangeSliderThumb index={1} children={null} />
      </RangeSlider>,
    );

    const thumbsIcon = document.getElementsByClassName(
      'julo-range-slider__default-thumb-icon',
    );

    expect(thumbsIcon.length).toBe(0);
  });
});
