import { cloneElement, createElement, isValidElement, memo } from 'react';
import { cx } from '@emotion/css';

import callAllFn from '@julofinance/web-helpers/dist/fn/callAllFn';

import { BodyProps } from '../../types';
import { commonStyles } from '../../styles';
import { omitHTMLProps, omitStyleProps } from '../../utils';
import { bodyTypographyCx } from './styles';

const Body = (props: Omit<BodyProps, 'type'>) => {
  const {
    asChild,
    children,
    className,
    onClick,
    as = 'p',
    size = 'regular',
    ...resProps
  } = props;

  const styleProps = omitHTMLProps(resProps);
  const htmlProps = omitStyleProps(resProps);

  if (asChild) {
    if (!isValidElement<BodyProps>(children))
      throw new Error('Please render an element');

    const { props: childProps } = children;
    return cloneElement(children, {
      ...htmlProps,
      ...childProps,
      className: cx(
        bodyTypographyCx,
        commonStyles(styleProps),
        { small: size === 'small' },
        className,
        childProps.className,
      ),
      onClick: callAllFn(onClick, childProps.onClick),
    });
  }

  return createElement(as, {
    children,
    className: cx(
      bodyTypographyCx,
      commonStyles(styleProps),
      {
        small: size === 'small',
      },
      className,
    ),
    onClick,
    ...htmlProps,
  });
};

export default memo(Body);
