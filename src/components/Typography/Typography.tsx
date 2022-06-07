import React, { memo } from 'react';

import Display from './components/Display';
import Heading from './components/Heading';
import Body from './components/Body';
import Caption from './components/Caption';

import type { TypographyProps } from './types';

const Typography = (props: TypographyProps) => {
  if (props.display) {
    return <Display {...props} />;
  }

  if (props.heading) {
    return <Heading {...props} />;
  }

  if (props.caption) {
    return <Caption {...props} />;
  }

  return <Body {...props} />;
};

export default memo(Typography);
