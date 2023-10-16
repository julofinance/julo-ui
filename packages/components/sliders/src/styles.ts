import { css } from '@emotion/react';

export const rootSliderCx = css`
  --slider-track-size: 0.5rem;
  --slider-thumb-size: 1rem;

  width: fit-content;
`;

export const rootSliderVerticalTrackCx = css`
  width: var(--slider-track-size);
`;

export const rootSliderHorizontalTrackCx = css`
  height: var(--slider-track-size);
`;

export const rootSliderTrackCx = css`
  overflow: hidden;
  border-radius: var(--corner-3xl);
  background-color: var(--colors-neutrals-40);
`;

export const rootSliderThumbCx = css`
  z-index: 1;

  width: var(--slider-thumb-size);
  height: var(--slider-thumb-size);

  border-radius: var(--corner-3xl);
  background-color: var(--colors-neutrals-10);
  box-shadow: var(--shadows-md);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const rootSliderInnerTrackCx = css`
  background-color: var(--colors-primary-30);
  height: inherit;
  width: inherit;
`;
