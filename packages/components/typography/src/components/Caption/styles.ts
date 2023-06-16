import { SystemStyleObject, TypographySize } from '@julo-ui/react';

export const captionSizesSx: Record<TypographySize, SystemStyleObject> = {
  regular: {
    fontSize: 'var(--fontSizes-captionRegular)',
    lineHeight: 'var(--lineHeights-captionRegular)',
  },
  small: {
    fontSize: 'var(--fontSizes-captionSmall)',
    lineHeight: 'var(--lineHeights-captionSmall)',
  },
};
