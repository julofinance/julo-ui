import { css, keyframes } from '@emotion/react';

export const progress = keyframes({
  '0%': { left: '-40%' },
  '100%': { left: '100%' },
});

export const stripe = keyframes({
  from: { backgroundPosition: '1rem 0' },
  to: { backgroundPosition: '0 0' },
});

export const progressCx = css`
  position: relative;
  overflow: hidden;
  height: 0.5rem;
  background-color: var(--colors-neutrals-30);
  border-radius: 6.25rem;
`;

export const progressFillCx = css`
  height: 100%;
  background-color: var(--colors-primary-30);
  border-radius: 6.25rem;
`;
