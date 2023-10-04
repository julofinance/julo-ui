import { css } from '@emotion/react';

import { SystemStyleObject } from '@julo-ui/system';

import { CardVariant } from './types';

export const cardCx = css`
  border-radius: 0.5rem;

  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  width: 100%;

  > :not(:first-of-type) {
    margin-top: 0.75rem;
  }
`;

export const cardVariant: Record<CardVariant, SystemStyleObject> = {
  default: {
    backgroundColor: 'var(--colors-neutrals-10)',
    boxShadow: 'var(--shadows-md)',
  },
  border: {
    background: 'var(--colors-neutrals-10)',
    border: 'var(--shadows-md)',
  },
  filled: {
    background: 'var(--colors-neutrals-20)',
  },
};
