import { css } from '@emotion/react';

export const inputAddonCx = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem;
  background-color: var(--colors-neutrals-40);

  height: 2.875rem;

  &[data-addon-placement='left'] {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    order: 1;
    padding-right: 0.75rem;
  }

  &[data-addon-placement='right'] {
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    order: 3;
    padding-left: 0.75rem;
  }
`;
