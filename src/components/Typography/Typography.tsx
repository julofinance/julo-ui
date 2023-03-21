import { memo } from 'react';

import Heading from './components/Heading';
import Body from './components/Body';
import Caption from './components/Caption/Caption';

import type { TypographyProps } from './types';

const Typography = (props: TypographyProps) => {
  const { type } = props;

  switch (type) {
    case 'heading':
      return <Heading {...props} />;

    case 'caption':
      return <Caption {...props} />;

    default:
      return <Body {...props} />;
  }
};

export default memo(Typography);
