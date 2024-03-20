import { css } from '@emotion/react';

export const tooltipCx = ({
  show,
  clickable,
  fixed,
}: {
  show: boolean;
  clickable: boolean;
  fixed: boolean;
}) => css`
  visibility: ${show ? 'visible' : 'hidden'};
  position: ${fixed ? 'fixed' : 'absolute'};
  top: 0;
  left: 0;
  pointer-events: ${clickable ? 'auto' : 'none'};
  opacity: ${show ? 1 : 0};
  transition: opacity 0.3s ease-out;

  background: var(--colors-neutrals-90);
  color: var(--colors-neutrals-10);
  font-size: var(--fontSizes-bodySmall);
  line-height: var(--lineHeights-bodySmall);

  padding: 8px 16px;
  border-radius: 8px;
  width: max-content;

  &[class*='julo-tooltip__place-top'] > .julo-tooltip-arrow {
    transform: rotate(45deg);
  }

  &[class*='julo-tooltip__place-right'] > .julo-tooltip-arrow {
    transform: rotate(135deg);
  }

  &[class*='julo-tooltip__place-bottom'] > .julo-tooltip-arrow {
    transform: rotate(225deg);
  }

  &[class*='julo-tooltip__place-left'] > .arrow {
    transform: rotate(315deg);
  }
`;

export const arrowCx = (show: boolean) => css`
  position: absolute;
  background: inherit;
  width: 8px;
  height: 8px;
  display: ${show ? 'inherit' : 'none'};
`;
