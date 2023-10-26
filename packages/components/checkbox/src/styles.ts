import { css, keyframes } from '@emotion/react';
import { CheckboxProps } from './types';

const checkAnim = keyframes({
  from: {
    opacity: 0,
    strokeDashoffset: 16,
    transform: 'scale(0.95)',
  },
  to: {
    opacity: 1,
    strokeDashoffset: 0,
    transform: 'scale(1)',
  },
});

const indeterminateOpacityAnim = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});
const indeterminateScaleAnim = keyframes({
  from: {
    transform: 'scaleX(0.65)',
  },
  to: {
    transform: 'scaleX(1)',
  },
});

export const checkboxCx = css`
  --checkbox-size: 1.25rem;

  cursor: pointer;
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 0;
  vertical-align: top;

  &[data-checked],
  &[aria-checked='true'] {
    .julo-checkbox__control {
      background-color: var(--colors-primary-30);
      border-color: var(--colors-primary-20);
    }
  }

  &[data-disabled],
  &:disabled,
  &[aria-disabled='true'] {
    cursor: not-allowed;
    .julo-checkbox__control {
      background-color: var(--colors-neutrals-30);
      border-color: var(--colors-neutrals-50);
    }
  }

  &[data-invalid],
  &[aria-invalid='true'] {
    .julo-checkbox__control {
      border-color: var(--colors-red-30);
    }
  }

  .julo-checkbox__input {
    border: 0;
    height: 0;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
  }

  .julo-checkbox__control {
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    min-width: var(--checkbox-size);
    min-height: var(--checkbox-size);
    border-radius: 0.25rem;
    border: 0.125rem solid var(--colors-neutrals-50);

    &:focus-visible,
    &[data-focus-visible] {
      box-shadow: var(--shadows-md);
    }
  }
`;

export const iconCx = ({
  isShouldAnimate,
  isIndeterminate,
  iconColor,
  iconSize,
}: {
  isShouldAnimate: boolean;
  isIndeterminate: boolean;
  iconSize: CheckboxProps['iconSize'];
  iconColor: CheckboxProps['iconColor'];
}) => css`
  animation: ${!isShouldAnimate
    ? undefined
    : isIndeterminate
    ? css`
        ${indeterminateOpacityAnim} 20ms linear, ${indeterminateScaleAnim} 200ms linear
      `
    : css`
        ${checkAnim} 200ms linear
      `};
  font-size: ${iconSize};
  color: ${iconColor};
  fill: ${iconColor};
`;
