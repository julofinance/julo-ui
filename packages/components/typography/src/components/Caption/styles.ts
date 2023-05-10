import { css } from '@emotion/css';

export const captionTypographyCx = css`
  font-size: var(--fontSizes-captionRegular);
  line-height: var(--lineHeights-captionRegular);
  &[data-typography-size='small'] {
    font-size: var(--fontSizes-captionSmall);
    line-height: var(--lineHeights-captionSmall);
  }
`;