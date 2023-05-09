import {
  cloneElement,
  createElement,
  forwardRef,
  isValidElement,
  memo,
} from 'react';
import { cx } from '@emotion/css';

import callAllFn from '@julofinance/web-helpers/dist/fn/callAllFn';

import { BodyProps } from '../../types';
import { commonStyles } from '../../styles';
import { omitHTMLProps, omitStyleProps } from '../../utils';
import { bodyTypographyCx } from './styles';

const Body = forwardRef<HTMLElement, Omit<BodyProps, 'type'>>((props, ref) => {
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
      'data-typography-size': size,
      className: cx(
        bodyTypographyCx,
        commonStyles(styleProps),
        className,
        childProps?.className,
      ),
      onClick: callAllFn(onClick, childProps?.onClick),
    } as BodyProps);
  }

  return createElement(as, {
    ref,
    children,
    className: cx(bodyTypographyCx, commonStyles(styleProps), className),
    onClick,
    'data-typography-size': size,
    ...htmlProps,
  });
});

export default memo(Body);
