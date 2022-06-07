import React, { memo } from 'react';

import { TypographyProps } from '../types';

import { styledDisplay } from '../styles';

const Display = (props: TypographyProps) => {
  switch (props.heading) {
    case 1:
      return (
        <h1
          className={`${styledDisplay(props)} ${props.className || ''}`}
          onClick={props.onClick}
        >
          {props.children}
        </h1>
      );

    case 2:
      return (
        <h2
          className={`${styledDisplay(props)} ${props.className || ''}`}
          onClick={props.onClick}
        >
          {props.children}
        </h2>
      );
  }

  return (
    <h3
      className={`${styledDisplay(props)} ${props.className || ''}`}
      onClick={props.onClick}
    >
      {props.children}
    </h3>
  );
};

export default memo(Display);
