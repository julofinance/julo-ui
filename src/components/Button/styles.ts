import { css } from '@emotion/css';

export const buttonCx = css`
  cursor: pointer;

  border: 0;
  border-radius: 0.5rem;

  padding: 0.75rem 1rem;

  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &.small {
    padding: 0.5rem 1rem;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &.block {
    width: 100%;
  }
`;

export const primaryButtonCx = css`
  color: var(--colors-neutrals-10);
  background-color: var(--colors-primary-30);

  &:hover {
    background-color: var(--colors-primary-40);
  }

  &:active {
    background-color: var(--colors-primary-50);
  }

  &:disabled {
    background-color: var(--colors-neutrals-30);
    color: var(--colors-neutrals-60);
  }

  &.inverted {
    color: var(--colors-primary-30);
    background-color: var(--colors-neutrals-10);
    border-color: var(--colors-neutrals-10);

    &:hover {
      color: var(--colors-primary-40);
    }

    &:active {
      color: var(--colors-primary-50);
    }
  }
`;

export const secondaryButtonCx = css`
  color: var(--colors-primary-30);
  background-color: var(--colors-neutrals-10);
  border: 1px solid var(--colors-primary-30);

  &:hover {
    color: var(--colors-primary-40);
    background-color: var(--colors-primary-10);
    border-color: var(--colors-primary-30);
  }

  &:active {
    color: var(--colors-primary-50);
    border-color: var(--colors-primary-50);
  }

  &:disabled {
    color: var(--colors-neutrals-50);
    background-color: var(--colors-neutrals-10);
    border-color: var(--colors-neutrals-40);
  }

  &.inverted {
    color: var(--colors-neutrals-10);
    background-color: var(--colors-primary-30);

    &:hover {
      background-color: var(--colors-primary-40);
    }

    &:active {
      background-color: var(--colors-primary-50);
    }
  }
`;

export const tertiaryButtonCx = css`
  color: var(--colors-primary-30);
  background-color: transparent;

  &.inverted {
    color: var(--colors-primary-10);
  }

  &:hover {
    color: var(--colors-primary-40);
    background-color: var(--colors-primary-10);
  }

  &:active {
    color: var(--colors-primary-50);
    background-color: var(--colors-primary-10);
  }

  &:disabled {
    color: var(--colors-neutrals-50);
    background-color: transparent;
  }
`;
