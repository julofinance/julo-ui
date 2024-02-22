import { css } from '@emotion/react';

export const otpInputCx = css`
  display: flex;

  .julo-otp-input__field {
    &:not(:last-of-type) {
      margin-right: 0.5rem;
    }
  }
`;
