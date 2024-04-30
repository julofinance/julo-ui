import { css } from '@emotion/react';

export const contentTooltipCx = css`
  --popper-arrow-bg: var(--colors-neutrals-90);
  background: var(--colors-neutrals-90);
  color: var(--colors-neutrals-10);
  line-height: var(--lineHeights-bodySmall);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: var(--fontSizes-bodySmall);
  // max-width: var(--chakra-sizes-xs);
  width: max-content;
  z-index: 1800;
`;

export const positionerTooltipCx = ({ open }: { open: boolean }) => css`
  opacity: ${open ? 1 : 0};
  visibility: ${open ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
`;
