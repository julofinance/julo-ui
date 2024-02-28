import { css } from '@emotion/react';

export const pinFieldCx = css`
  position: relative;
  display: flex;

  pointer-events: none;
  user-select: none;

  caret-color: transparent;
  color: transparent;

  width: 1.5rem;
  height: 1.5rem;
  padding: 0;

  border: 1px solid var(--colors-neutrals-40);
  border-radius: var(--corner-3xl);
  background-color: var(--colors-neutrals-10);

  &:not([value='']) {
    border-color: var(--colors-primary-20);
    background-color: var(--colors-primary-30);
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      background-color: red;
      position: absolute;
    }
  }
`;
