export interface GetProgressPropsOptions {
  value?: number;
  min: number;
  max: number;
  valueText?: string;
  getValueText?(value: number, percent: number): string;
  isIndeterminate?: boolean;
  role?: React.AriaRole;
}

function valueToPercent(value: number, min: number, max: number) {
  return ((value - min) * 100) / (max - min);
}

/**
 * Get the common `aria-*` attributes for both the linear and circular
 * progress components.
 */
export function getProgressProps(options: GetProgressPropsOptions) {
  const {
    value = 0,
    min,
    max,
    valueText,
    getValueText,
    isIndeterminate,
    role = 'progressbar',
  } = options;

  const percent = valueToPercent(value, min, max);

  const getAriaValueText = () => {
    if (value == null) return undefined;
    return typeof getValueText === 'function'
      ? getValueText(value, percent)
      : valueText;
  };

  return {
    bind: {
      'data-indeterminate': isIndeterminate ? '' : undefined,
      'aria-valuemax': max,
      'aria-valuemin': min,
      'aria-valuenow': isIndeterminate ? undefined : value,
      'aria-valuetext': getAriaValueText(),
      role,
    },
    percent,
    value,
  };
}

export function generateStripe(
  size = '1rem',
  color = 'rgba(255, 255, 255, 0.15)',
) {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${color} 25%,
    transparent 25%,
    transparent 50%,
    ${color} 50%,
    ${color} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${size} ${size}`,
  };
}
