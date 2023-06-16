import { css } from '@emotion/react';

export const formLabelCx = css`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  color: var(--colors-neutrals-90);
  font-weight: 700;
  font-size: var(--fontSizes-captionRegular);
  line-height: var(--lineHeights-captionRegular);

  margin-bottom: 0.25rem;

  .julo-form__required-indicator {
    margin-left: 0.25rem;
    > .julo-badge {
      padding: 0 4px;
    }
  }
`;
