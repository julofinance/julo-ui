import { css } from '@emotion/react';

export const formInfoGroupCx = css`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;

  margin-top: 0.25rem;

  .julo-form__helper-text,
  .julo-form__error-message {
    margin: 0;
  }

  *:not(.julo-form__counter-text) {
    flex: 1;
  }

  .julo-form__counter-text {
    color: var(--colors-neutrals-80);
    display: flex;
    margin-left: 0.625rem;
  }
`;
