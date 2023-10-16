import { css } from '@emotion/react';

import { SystemStyleObject } from '@julo-ui/system';

import { ButtonSize, ButtonVariant } from './types';

export const buttonCx = css`
  cursor: pointer;

  border: 0;
  border-radius: 0.5rem;

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:disabled {
    cursor: not-allowed;
  }

  &[data-button-block='true'] {
    width: 100%;
  }
`;

export const buttonSize: Record<ButtonSize, SystemStyleObject> = {
  regular: { padding: '0.75rem 1rem' },
  small: {
    padding: '0.5rem 1rem',
  },
};

export const buttonVariant: Record<ButtonVariant, SystemStyleObject> = {
  primary: {
    color: 'var(--colors-neutrals-10)',
    backgroundColor: 'var(--colors-primary-30)',
    '&:hover': {
      backgroundColor: 'var(--colors-primary-40)',
    },
    '&:active': {
      backgroundColor: 'var(--colors-primary-50)',
    },
    '&:disabled': {
      backgroundColor: 'var(--colors-neutrals-30)',
    },
    "&[data-button-variant-inverted='true']": {
      color: 'var(--colors-primary-30)',
      backgroundColor: 'var(--colors-neutrals-10)',
      borderColor: 'var(--colors-neutrals-10)',
      '&:hover': {
        color: 'var(--colors-primary-40)',
      },
      '&:active': {
        color: 'var(--colors-primary-50)',
      },
    },
  },
  secondary: {
    color: 'var(--colors-primary-30)',
    backgroundColor: 'var(--colors-neutrals-10)',
    border: '1px solid var(--colors-primary-30)',
    '&:hover': {
      color: 'var(--colors-primary-40)',
      backgroundColor: 'var(--colors-primary-10)',
      borderColor: 'var(--colors-primary-30);',
    },
    '&:active': {
      color: 'var(--colors-primary-50)',
      borderColor: 'var(--colors-primary-50)',
    },
    '&:disabled': {
      color: 'var(--colors-neutrals-50)',
      backgroundColor: 'var(--colors-neutrals-30)',
      borderColor: 'var(--colors-neutrals-40)',
    },
    "&[data-button-variant-inverted='true']": {
      color: 'var(--colors-neutrals-10)',
      backgroundColor: 'var(--colors-primary-30)',
      '&:hover': {
        color: 'var(--colors-primary-40)',
      },
      '&:active': {
        color: 'var(--colors-primary-50)',
      },
    },
  },
  tertiary: {
    color: 'var(--colors-primary-30)',
    backgroundColor: 'transparent',
    "&[data-button-variant-inverted='true']": {
      color: 'var(--colors-primary-10)',
    },
    '&:hover': {
      color: 'var(--colors-primary-40)',
      backgroundColor: 'var(--colors-primary-10)',
    },
    '&:active': {
      color: 'var(--colors-primary-50)',
      backgroundColor: 'var(--colors-primary-10)',
    },
    '&:disabled': {
      color: 'var(--colors-neutrals-50)',
      backgroundColor: 'transparent',
    },
  },
};
