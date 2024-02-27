import { css } from '@emotion/react';

export const otpInputFieldCx = css`
  width: 3rem;
  height: 2.875rem;

  padding: 0.75rem 0.8125rem;
  border: 1px solid var(--colors-neutrals-30);
  border-radius: var(--corner-md);

  text-align: center;

  &:focus,
  &:focus-visible {
    border-color: var(--colors-primary-20);
  }

  &:focus-visible {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    border-color: var(--colors-neutrals-50);
    background-color: var(--colors-neutrals-30);
  }

  &[aria-invalid='true'] {
    border-color: var(--colors-red-30);
  }
`;
