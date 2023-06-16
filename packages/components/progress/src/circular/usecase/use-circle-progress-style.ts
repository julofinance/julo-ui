import { getProgressProps } from '../../utils';
import { spin } from '../styles';
import { CircularProgressProps } from '../types';

interface UseCircleProgressStyleProps {
  min: number;
  max: number;
  value: CircularProgressProps['value'];
  valueText: CircularProgressProps['valueText'];
  getValueText: CircularProgressProps['getValueText'];
  isIndeterminate: CircularProgressProps['isIndeterminate'];
}

function useCircleProgressStyle({
  min,
  max,
  value,
  valueText,
  getValueText,
  isIndeterminate,
}: UseCircleProgressStyleProps) {
  const progress = getProgressProps({
    min,
    max,
    value,
    valueText,
    getValueText,
    isIndeterminate,
  });

  const determinant = isIndeterminate
    ? undefined
    : (progress.percent ?? 0) * 2.64;

  const strokeDasharray =
    determinant == null ? undefined : `${determinant} ${264 - determinant}`;

  const indicatorProps = isIndeterminate
    ? {
        css: { animation: `${spin} 1.5s linear infinite` },
      }
    : {
        strokeDashoffset: 66,
        strokeDasharray,
        transitionProperty: 'stroke-dasharray, stroke',
        transitionDuration: '0.6s',
        transitionTimingFunction: 'ease',
      };

  return { indicatorProps, progress };
}

export default useCircleProgressStyle;
