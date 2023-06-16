import { Interpolation } from '@emotion/react';
import { generateStripe } from '../../utils';
import { ProgressProps } from '../types';
import { stripe, progress as progressAnim } from '../styles';

interface UseCircleProgressStyleProps {
  isIndeterminate: ProgressProps['isIndeterminate'];
  hasStripe: ProgressProps['hasStripe'];
  isAnimated: ProgressProps['isAnimated'];
  color?: ProgressProps['color'];
}

function useProgressStyle({
  isIndeterminate,
  hasStripe,
  isAnimated,
  color = 'var(--colors-primary-30)',
}: UseCircleProgressStyleProps) {
  const stripeAnimation = { animation: `${stripe} 1s linear infinite` };

  /**
   * We should not use stripe if it is `indeterminate`
   */
  const shouldAddStripe = !isIndeterminate && hasStripe;

  const shouldAnimateStripe = shouldAddStripe && isAnimated;

  const isShowStripe = !isIndeterminate && !!hasStripe;

  const stripeCx = isShowStripe && generateStripe();

  /**
   * Generate styles for stripe and stripe animation
   */
  const fillCss: Interpolation<NonNullable<unknown>> = {
    ...(isIndeterminate && {
      backgroundImage: `linear-gradient(
        to right,
        transparent 0%,
        ${color} 50%,
        transparent 100%
      )`,
      backgroundColor: 'transparent',
    }),
    ...(isShowStripe && generateStripe()),
    ...(shouldAnimateStripe && stripeAnimation),
    ...(isIndeterminate && {
      position: 'absolute',
      willChange: 'left',
      minWidth: '50%',
      animation: `${progressAnim} 1s ease infinite normal none running`,
    }),
  };

  return { fillCss, stripeCx };
}

export default useProgressStyle;
