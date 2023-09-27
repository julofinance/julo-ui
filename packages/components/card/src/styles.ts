import { css } from '@emotion/react';

import { SystemStyleObject } from '@julo-ui/system';

import { CardVariant } from './types';

export const cardCx = css`
  border-radius: 0.5rem;

  width: 100%;

  > :nth-of-type(odd) {
    padding-top: 12px;
    padding-bottom: 12px;
  }
  > :nth-last-of-type(1):nth-of-type(even) {
    padding-top: 0;
    padding-bottom: 12px;
  }
`;

export const cardVariant: Record<CardVariant, SystemStyleObject> = {
  default: {
    backgroundColor: 'var(--colors-neutrals-10)',
    boxShadow: '0px 1px 16px 0px rgba(0, 0, 0, 0.12)',
  },
  border: {
    background: 'var(--colors-neutrals-10)',
    border: '1px solid var(--colors-neutrals-30)',
  },
  filled: {
    background: 'var(--colors-neutrals-20)',
  },
};
