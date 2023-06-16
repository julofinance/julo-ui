import { css } from '@emotion/react';

export const textAreaCx = css`
  display: block;

  width: 100%;

  padding: 0.75rem;

  border: 1px solid var(--colors-neutrals-40);
  border-radius: 0.5rem;

  outline: transparent solid;

  color: var(--colors-neutrals-100);

  &:disabled {
    color: var(--colors-neutrals-70);
    border-color: var(--colors-neutrals-50);
    background-color: var(--colors-neutrals-30);
    &::placeholder {
      color: var(--colors-neutrals-50);
    }
  }

  &:not(:read-only) {
    &[aria-invalid='true'] {
      border-color: var(--colors-red-30);
    }

    &:focus-visible {
      caret-color: var(--colors-primary-30);
      border-color: var(--colors-primary-20);
    }
  }
`;
