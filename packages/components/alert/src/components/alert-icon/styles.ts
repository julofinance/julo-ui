import { css } from '@emotion/react';
import { SystemStyleObject } from '@julo-ui/system';

import { AlertStatus } from '../../types';

export const alertIconCx = css`
  &[data-icon-placement='left'] {
    order: 0;
    margin-right: 0.5rem;
  }

  &[data-icon-placement='right'] {
    order: 999;
    margin-left: 0.5rem;
  }
`;

export const alertIconStatusSx: Record<AlertStatus, SystemStyleObject> = {
  info: {
    color: 'var(--colors-blue-40)',
    svg: {
      fill: 'var(--colors-blue-40)',
    },
  },
  negative: {
    color: 'var(--colors-red-40)',
    svg: {
      fill: 'var(--colors-red-40)',
    },
  },
  positive: {
    color: 'var(--colors-green-40)',
    svg: {
      fill: 'var(--colors-green-40)',
    },
  },
  warning: {
    color: 'var(--colors-orange-40)',
    svg: {
      fill: 'var(--colors-orange-40)',
    },
  },
  neutrals: {
    color: 'var(--colors-neutrals-90)',
    svg: {
      fill: 'var(--colors-neutrals-90)',
    },
  },
};
