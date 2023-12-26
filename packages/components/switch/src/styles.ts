import { css } from '@emotion/react';

export const switchCx = css`
  --switch-track-width: 2.75rem;
  --switch-track-height: 1.5rem;
  --switch-track-padding: 0.125rem;
  --switch-thumb-size: calc(var(--switch-track-height) * 0.8333333333333334);
  --switch-thumb-x: calc(
    var(--switch-track-width) - var(--switch-track-height) -
      var(--switch-track-padding)
  );
  --switch-bg: var(--colors-neutrals-50);
  --active-switch-bg: var(--colors-green-30);
  --disabled-switch-bg: var(--colors-neutrals-40);

  position: relative;

  display: inline-block;

  line-height: 0;
  vertical-align: middle;

  .julo-switch__input {
    border: 0;
    height: 0;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    position: absolute;
    clip: rect(0, 0, 0, 0);
  }

  .julo-switch__track {
    cursor: pointer;
    display: inline-flex;

    padding: var(--switch-track-padding);
    align-items: center;
    justify-content: flex-start;

    width: var(--switch-track-width);
    height: var(--switch-track-height);
    background-color: var(--switch-bg);

    border: 1px solid var(--switch-bg);
    border-radius: var(--corner-3xl);

    &[data-checked] {
      border-color: var(--active-switch-bg);
      background-color: var(--active-switch-bg);
    }

    &[data-disabled] {
      cursor: not-allowed;
      border-color: var(--disabled-switch-bg);
      background-color: var(--disabled-switch-bg);
    }
  }

  .julo-switch__thumb {
    height: var(--switch-thumb-size);
    width: var(--switch-thumb-size);

    border-radius: inherit;
    background-color: var(--colors-neutrals-10);

    transition-property: transform;
    transition-duration: 0.2s;

    &[data-checked] {
      transform: translateX(var(--switch-thumb-x));
    }

    &[data-disabled] {
      background-color: var(--colors-neutrals-50);
    }
  }

  .julo-switch__label {
    margin-left: 0.5rem;
  }
`;
