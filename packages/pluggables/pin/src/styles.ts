import { css } from '@emotion/react';

export const pinCx = css`
  display: inline-flex;
  flex-wrap: nowrap;

  padding: 0.5rem;

  width: fit-content;

  .julo-pin__field {
    &:not(:last-of-type) {
      margin-right: 1.5rem;
    }
  }
`;
