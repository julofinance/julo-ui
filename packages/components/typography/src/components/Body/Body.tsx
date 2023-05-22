import { cloneElement, isValidElement, memo } from 'react';
import { cx } from '@emotion/css';

import callAllFn from '@julofinance/web-helpers/dist/fn/callAllFn';
import { forwardRef, julo } from '@julo-ui/system';

import { BodyProps } from '../../types';
import { commonStyles } from '../../styles';
import { omitHTMLProps, omitStyleProps } from '../../utils';
import { bodyTypographyCx } from './styles';

const Body = forwardRef<Omit<BodyProps, 'type'>, 'p'>((props, ref) => {
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

  const bodyClasses = cx(
    'julo-body-typography',
    bodyTypographyCx,
    commonStyles(styleProps),
    className,
  );

  if (asChild) {
    if (!isValidElement<BodyProps>(children))
      throw new Error('Please render an element');

    const { props: childProps } = children;
    return cloneElement(children, {
      ...htmlProps,
      ...childProps,
      'data-typography-size': size,
      className: cx(bodyClasses, childProps?.className),
      onClick: callAllFn(onClick, childProps?.onClick),
    } as BodyProps);
  }

  return (
    <julo.p
      ref={ref}
      className={bodyClasses}
      onClick={onClick}
      data-typography-size={size}
      {...htmlProps}
    >
      {children}
    </julo.p>
  );
});

export default memo(Body);
