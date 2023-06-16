import { css } from '@emotion/react';

export const inputElementCx = css`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.75rem;

  height: 2.875rem;

  &[data-element-placement='left'] {
    order: 1;
    margin-right: 0.5rem;
    padding-right: 0;
  }

  &[data-element-placement='right'] {
    order: 3;
    margin-left: 0.5rem;
    padding-left: 0;
  }
`;
