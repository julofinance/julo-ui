import { useRef, useImperativeHandle } from 'react';

import { cx, forwardRef, julo } from '@julo-ui/system';

import { useSafeLayoutEffect } from '@julo-ui/use-safe-layout-effect';
import { useTooltip } from './use-tooltip';

import { arrowCx, tooltipCx } from './styles';
import type { TooltipProps } from './types';

const Tooltip = forwardRef<TooltipProps, 'div'>((props, ref) => {
  const {
    id,
    place = 'top',
    className,
    classNameArrow,
    clickable = false,
    positionStrategy = 'absolute',
    position,
    style,
    noArrow = false,
    openOnClick = false,
    isOpen,
    setIsOpen,
    offset,
    middlewares,
    content,
    anchorSelect,
    hidden,
    children,
  } = props;

  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipArrowRef = useRef(null);

  const mounted = useRef(false);

  const {
    isShow,
    mountState,
    actualPlacement,
    arrowStyles,
    tooltipStyles,
    renderedContent,
  } = useTooltip({
    id,
    place,
    clickable,
    positionStrategy,
    position,
    openOnClick,
    isOpen,
    setIsOpen,
    offset,
    middlewares,
    content,
    anchorSelect,
    hidden,
    tooltipRef,
    tooltipArrowRef,
    children,
  });

  useImperativeHandle(
    ref,
    () => {
      return tooltipRef.current;
    },
    [],
  );

  /**
   * useLayoutEffect runs before useEffect,
   * but should be used carefully because of caveats
   * https://beta.reactjs.org/reference/react/useLayoutEffect#caveats
   */
  useSafeLayoutEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return isShow ? (
    <julo.div
      id={id}
      ref={tooltipRef}
      role='tooltip'
      className={cx(
        'julo-tooltip',
        `julo-tooltip__place-${actualPlacement}`,
        className,
      )}
      style={style}
      sx={tooltipStyles}
      __css={tooltipCx({
        show: mountState === 'mounted',
        clickable,
        fixed: positionStrategy === 'fixed',
      })}
    >
      {renderedContent}
      <julo.div
        className={cx('julo-tooltip-arrow', classNameArrow)}
        sx={arrowStyles}
        __css={arrowCx(!noArrow)}
        ref={tooltipArrowRef}
      />
    </julo.div>
  ) : null;
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
