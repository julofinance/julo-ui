import { css } from '@emotion/react';

export const radioCx = (size: string | number) => css`
  --radio-size: ${typeof size === 'number' ? `${size}px` : size};

  cursor: pointer;
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 0;
  vertical-align: top;

  .julo-radio__input {
    border: 0;
    height: 0;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
  }

  .julo-radio__control {
    --colors-checked: var(--colors-primary-30);
    --colors-disabled: var(--colors-neutrals-50);
    --colors-bg-disabled: var(--colors-neutrals-30);

    position: relative;
    width: var(--radio-size);
    height: var(--radio-size);
    border: 0.125rem solid var(--colors-neutrals-50);
    border-radius: var(--corner-3xl);
  }

  &[aria-checked='true'],
  &[data-checked] {
    .julo-radio__control {
      border-color: var(--colors-checked);

      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 50%;
        border-radius: var(--corner-3xl);
        background-color: var(--colors-checked);
      }
    }
  }

  &:disabled,
  &[aria-disabled='true'],
  &[data-disabled] {
    cursor: not-allowed;

    .julo-radio__control {
      background-color: var(--colors-bg-disabled);
      border-color: var(--colors-disabled);

      &::before {
        background-color: var(--colors-disabled);
      }
    }
  }
`;
