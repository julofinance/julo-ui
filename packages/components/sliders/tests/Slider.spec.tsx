import { render, screen, testA11y, focus, act } from '@julo-ui/rtl-utils';

import {
  Slider,
  SliderInnerTrack,
  SliderThumb,
  SliderTrack,
  UseSliderProps,
} from '../src';

const defaultValue = 10;

const SimpleSlider = (props: {
  defaultValue?: number;
  isReversed?: boolean;
  orientation?: UseSliderProps['orientation'];
  direction?: UseSliderProps['direction'];
}) => (
  <Slider
    aria-label='slider-2'
    orientation={props.orientation}
    isReversed={props.isReversed || undefined}
    defaultValue={props.defaultValue || defaultValue}
    direction={props.direction || 'ltr'}
  >
    <SliderTrack data-testid='slider-track'>
      <SliderInnerTrack data-testid='slider-inner-track' />
    </SliderTrack>
    <SliderThumb data-testid='slider-thumb' />
  </Slider>
);

describe('Accessibility', () => {
  test('passes a11y test', async () => {
    Object.defineProperty(window, 'requestAnimationFrame', {
      value: jest.fn((cb) => cb()),
    });

    await act(() => testA11y(<SimpleSlider />));
  });
});

describe('Slider', () => {
  test('should move the thumb', async () => {
    const { user } = render(<SimpleSlider />);

    const thumb = screen.getByRole('slider');

    focus(thumb);

    await user.keyboard('[ArrowRight]');
    expect(thumb).toHaveAttribute('aria-valuenow', '11');

    await user.keyboard('[ArrowRight]');
    expect(thumb).toHaveAttribute('aria-valuenow', '12');

    await user.keyboard('[Home]');
    expect(thumb).toHaveAttribute('aria-valuenow', '0');

    await user.keyboard('[End]');
    expect(thumb).toHaveAttribute('aria-valuenow', '100');
  });

  test('renders & move correctly when orientation: vertical & isReversed', async () => {
    const { user } = render(<SimpleSlider orientation='vertical' isReversed />);

    const thumb = screen.getByRole('slider');

    focus(thumb);

    await user.keyboard('[ArrowUp]');
    expect(thumb).toHaveAttribute('aria-valuenow', '9');

    await user.keyboard('[ArrowDown]');
    expect(thumb).toHaveAttribute('aria-valuenow', '10');

    await user.keyboard('[Home]');
    expect(thumb).toHaveAttribute('aria-valuenow', '0');

    await user.keyboard('[End]');
    expect(thumb).toHaveAttribute('aria-valuenow', '100');
  });

  test("renders with the correct direction under 'rtl'", async () => {
    const { user } = render(<SimpleSlider direction='rtl' />);

    const thumb = screen.getByRole('slider');

    focus(thumb);

    await user.keyboard('[ArrowRight]');
    expect(thumb).toHaveAttribute('aria-valuenow', '9');

    await user.keyboard('[ArrowRight]');
    expect(thumb).toHaveAttribute('aria-valuenow', '8');

    await user.keyboard('[Home]');
    expect(thumb).toHaveAttribute('aria-valuenow', '0');

    await user.keyboard('[End]');
    expect(thumb).toHaveAttribute('aria-valuenow', '100');
  });

  test("renders with the correct direction under 'rtl' & isReversed", async () => {
    const { user } = render(<SimpleSlider isReversed direction='rtl' />);

    const thumb = screen.getByRole('slider');

    focus(thumb);

    await user.keyboard('[ArrowRight]');
    expect(thumb).toHaveAttribute('aria-valuenow', '11');

    await user.keyboard('[ArrowRight]');
    expect(thumb).toHaveAttribute('aria-valuenow', '12');

    await user.keyboard('[Home]');
    expect(thumb).toHaveAttribute('aria-valuenow', '0');

    await user.keyboard('[End]');
    expect(thumb).toHaveAttribute('aria-valuenow', '100');
  });

  test("renders correctly/unaffected by 'rtl' when orientation: vertical", async () => {
    const { user } = render(
      <SimpleSlider orientation='vertical' direction='rtl' />,
    );

    const thumb = screen.getByRole('slider');

    focus(thumb);

    await user.keyboard('[ArrowRight]');
    await user.keyboard('[ArrowUp]');
    expect(thumb).toHaveAttribute('aria-valuenow', '12');

    await user.keyboard('[ArrowDown]');
    await user.keyboard('[ArrowLeft]');
    expect(thumb).toHaveAttribute('aria-valuenow', '10');

    await user.keyboard('[Home]');
    expect(thumb).toHaveAttribute('aria-valuenow', '0');

    await user.keyboard('[End]');
    expect(thumb).toHaveAttribute('aria-valuenow', '100');
  });

  test('should remove default icon from thumb on passing null to SliderThumb children', () => {
    render(
      <Slider>
        <SliderTrack data-testid='slider-track'>
          <SliderInnerTrack data-testid='slider-inner-track' />
        </SliderTrack>
        <SliderThumb data-testid='slider-thumb' children={null} />
      </Slider>,
    );

    expect(
      document.querySelector('.julo-slider__default-thumb-icon'),
    ).not.toBeInTheDocument();
  });
});
