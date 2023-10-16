import { css, keyframes } from '@emotion/react';
import { SystemStyleObject } from '@julo-ui/system';
import { ProgressVariant } from '../types';

export const rotate = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const spin = keyframes({
  '0%': {
    strokeDasharray: '1, 400',
    strokeDashoffset: '0',
  },
  '50%': {
    strokeDasharray: '400, 400',
    strokeDashoffset: '-100',
  },
  '100%': {
    strokeDasharray: '400, 400',
    strokeDashoffset: '-260',
  },
});

export const trackColorSx: Record<ProgressVariant, SystemStyleObject> = {
  primary: {
    stroke: 'var(--colors-primary-10)',
  },
  secondary: {
    stroke: 'var(--colors-neutrals-10)',
  },
};

export const circularProgressCX = css`
  display: flex;
  position: relative;
`;
