import { css } from '@emotion/react';

import { SystemStyleObject } from '@julo-ui/system';

import { AlertStatus } from './types';

export const alertCx = css`
  border-radius: 0.5rem;
  display: flex;
  padding: 0.5rem 0.75rem;
`;

export const alertStatus: Record<AlertStatus, SystemStyleObject> = {
  info: {
    border: '1px solid var(--colors-blue-20)',
    background: 'var(--colors-blue-10)',
  },
  negative: {
    border: '1px solid var(--colors-red-20)',
    background: 'var(--colors-red-10)',
  },
  positive: {
    border: '1px solid var(--colors-green-20)',
    background: 'var(--colors-green-10)',
  },
  warning: {
    border: '1px solid var(--colors-orange-20)',
    background: 'var(--colors-orange-10)',
  },
  neutrals: {
    border: '1px solid var(--colors-neutrals-50)',
    background: 'var(--colors-neutrals-30)',
  },
};
