import { SystemStyleObject } from '@julo-ui/system';
import { TypographySize } from '../../types';

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
