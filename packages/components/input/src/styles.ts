import { css } from '@emotion/react';

export const inputCx = css`
  width: 100%;
  height: 2.875rem;

  padding: 0.75rem;

  border: 1px solid var(--colors-neutrals-40);
  border-radius: 0.5rem;

  outline: transparent solid;

  color: var(--colors-neutrals-100);

  appearance: none;

  &[size] {
    width: auto;
  }

  &:not(:read-only) {
    &:disabled {
      color: var(--colors-neutrals-70);
      border-color: var(--colors-neutrals-50);
      background-color: var(--colors-neutrals-30);
      &::placeholder {
        color: var(--colors-neutrals-50);
      }
    }

    &[aria-invalid='true'] {
      border-color: var(--colors-red-30);
    }

    &:focus-visible {
      caret-color: var(--colors-primary-30);
      border-color: var(--colors-primary-20);
    }
  }

  &:read-only {
    background-color: transparent;
    cursor: default;
  }
`;
