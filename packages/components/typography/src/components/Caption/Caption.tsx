import { cx } from '@emotion/css';
import { isValidElement, memo, cloneElement } from 'react';

import callAllFn from '@julofinance/web-helpers/dist/fn/callAllFn';
import { forwardRef, julo } from '@julo-ui/system';

import type { CaptionProps } from '../../types';
import { omitHTMLProps, omitStyleProps } from '../../utils';
import { commonStyles } from '../../styles';
import { captionTypographyCx } from './styles';

const Caption = forwardRef<Omit<CaptionProps, 'type'>, 'span'>((props, ref) => {
  const {
    asChild,
    children,
    className,
    onClick,
    size = 'regular',
    ...resProps
  } = props;

  const styleProps = omitHTMLProps(resProps);
  const htmlProps = omitStyleProps(resProps);

  const captionClasses = cx(
    'julo-caption-typography',
    captionTypographyCx,
    commonStyles(styleProps),
    className,
  );

  if (asChild) {
    if (!isValidElement<CaptionProps>(children))
      throw new Error('Please render an element');

    const { props: childProps } = children;

    return cloneElement(children, {
      ...htmlProps,
      ...childProps,
      className: cx(captionClasses, childProps?.className),
      'data-typography-size': size,
      onClick: callAllFn(onClick, childProps?.onClick),
    } as CaptionProps);
  }

  return (
    <julo.span
      ref={ref}
      className={captionClasses}
      data-typography-size={size}
      onClick={onClick}
      {...htmlProps}
    >
      {children}
    </julo.span>
  );
});

export default memo(Caption);
