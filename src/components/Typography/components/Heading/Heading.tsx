import { cloneElement, createElement, isValidElement, memo } from 'react';

import callAllFn from '@julofinance/web-helpers/dist/fn/callAllFn';

import { useTheme } from '../../../../provider';
import { HeadingProps } from '../../types';

import { commonStyles } from '../../styles';
import { cx } from '@emotion/css';
import { omitHTMLProps, omitStyleProps } from '../../utils';
import { headingTypographyCx } from './styles';

const Heading = (props: Omit<HeadingProps, 'type'>) => {
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
        `heading-${headingType}`,
        commonStyles(styleProps),
        className,
        childProps.className,
      ),
      onClick: callAllFn(onClick, childProps.onClick),
    });
  }

  return createElement(`h${headingType}`, {
    children,
    className: cx(className, commonStyles(styleProps)),
    onClick,
    ...htmlProps,
  });
};

export default memo(Heading);
