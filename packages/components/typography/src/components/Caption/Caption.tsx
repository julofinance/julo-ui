import { cx } from '@emotion/css';
import {
  isValidElement,
  memo,
  cloneElement,
  createElement,
  forwardRef,
} from 'react';

import callAllFn from '@julofinance/web-helpers/dist/fn/callAllFn';

import type { CaptionProps } from '../../types';
import { omitHTMLProps, omitStyleProps } from '../../utils';
import { commonStyles } from '../../styles';
import { captionTypographyCx } from './styles';

const Caption = forwardRef<HTMLElement, Omit<CaptionProps, 'type'>>(
  (props, ref) => {
    const {
      asChild,
      children,
      className,
      onClick,
      size = 'regular',
      as = 'span',
      ...resProps
    } = props;

    const styleProps = omitHTMLProps(resProps);
    const htmlProps = omitStyleProps(resProps);

    if (asChild) {
      if (!isValidElement<CaptionProps>(children))
        throw new Error('Please render an element');

      const { props: childProps } = children;

      return cloneElement(children, {
        ...htmlProps,
        ...childProps,
        className: cx(
          'caption',
          captionTypographyCx,
          commonStyles(styleProps),
          className,
          childProps?.className,
        ),
        'data-typography-size': size,
        onClick: callAllFn(onClick, childProps?.onClick),
      } as CaptionProps);
    }

    return createElement(as, {
      children,
      className: cx(
        'caption',
        commonStyles(styleProps),
        captionTypographyCx,
        className,
      ),
      ref,
      'data-typography-size': size,
      onClick,
      ...htmlProps,
    });
  },
);

export default memo(Caption);
