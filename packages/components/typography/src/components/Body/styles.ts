import { SystemStyleObject, TypographySize } from '@julo-ui/react';

export const bodySizesSx: Record<TypographySize, SystemStyleObject> = {
  regular: {
    fontSize: 'var(--fontSizes-bodyRegular)',
    lineHeight: 'var(--lineHeights-bodyRegular)',
  },
  small: {
    fontSize: 'var(--fontSizes-bodySmall)',
    lineHeight: 'var(--lineHeights-bodySmall)',
  },
};
