import { css } from '@emotion/css';

export const bodyTypographyCx = css`
  font-size: var(--fontSizes-bodyRegular);
  line-height: var(--lineHeights-bodyRegular);

  &.small {
    font-size: var(--fontSizes-bodySmall);
    line-height: var(--lineHeights-bodySmall);
  }
`;
