import { css } from '@emotion/react';

import { SystemStyleObject } from '@julo-ui/system';

import { CardVariant } from './types';

export const cardCx = css`
  border-radius: 0.5rem;

  padding-top: 0.75rem;
  padding-bottom: 0.75rem;

  width: 100%;

  .julo-card__header + .julo-card__body,
  .julo-card__body + .julo-card__footer {
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
    border: '1px solid var(--colors-neutrals-30)',
  },
  filled: {
    background: 'var(--colors-neutrals-20)',
  },
};
