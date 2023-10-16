import { memo } from 'react';

import { forwardRef } from '@julo-ui/system';

import Heading from './components/Heading';
import Body from './components/Body';
import Caption from './components/Caption/Caption';

import type { TypographyProps } from './types';

const Typography = forwardRef<TypographyProps, 'div'>(
  (props: TypographyProps, ref) => {
    const { type } = props;

    switch (type) {
      case 'heading':
        return <Heading ref={ref} {...props} />;

      case 'caption':
        return <Caption ref={ref} {...props} />;

      default:
        return <Body ref={ref} {...props} />;
    }
  },
);

Typography.displayName = 'Typography';

export default memo(Typography);
