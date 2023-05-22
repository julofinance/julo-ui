import { cx } from '@emotion/css';
import {
  cloneElement,
  createElement,
  forwardRef,
  isValidElement,
  memo,
} from 'react';

import callAllFn from '@julofinance/web-helpers/dist/fn/callAllFn';
import { useTheme } from '@julo-ui/provider';

import { HeadingProps } from '../../types';
import { commonStyles } from '../../styles';
import { omitHTMLProps, omitStyleProps } from '../../utils';
import { headingTypographyCx } from './styles';

const Heading = forwardRef<HTMLElement, Omit<HeadingProps, 'type'>>(
  (props, ref) => {
    const { asChild, headingType, children, className, onClick, ...resProps } =
      props;

    const styleProps = omitHTMLProps(resProps);
    const htmlProps = omitStyleProps(resProps);

    const theme = useTheme();

    if (asChild) {
      if (!isValidElement<HeadingProps>(children))
        throw new Error('Please render an element');

      const { props: childProps } = children;

      const fontSize = theme.fontSizes[`h${headingType}`];
      const lineHeight = theme.lineHeights[`h${headingType}`];

      return cloneElement(children, {
        ...htmlProps,
        ...childProps,
        className: cx(
          headingTypographyCx(fontSize, lineHeight),
          commonStyles(styleProps),
          className,
          childProps?.className,
        ),
        'data-heading-type': headingType,
        onClick: callAllFn(onClick, childProps?.onClick),
      } as HeadingProps);
    }

    return createElement(`h${headingType}`, {
      ref,
      children,
      className: cx(className, commonStyles(styleProps)),
      onClick,
      'data-heading-type': headingType,
      ...htmlProps,
    });
  },
);

export default memo(Heading);
