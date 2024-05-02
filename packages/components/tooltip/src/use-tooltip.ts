import React, { useCallback, useEffect, useId, useRef } from 'react';

import { popperCSSVars, usePopper } from '@chakra-ui/popper';
import { callAllFn } from '@julo-ui/function-utils';
import { mergeRefs } from '@julo-ui/dom-utils';
import { useDisclosure } from '@julo-ui/use-disclosure';
import { useEventListener } from '@julo-ui/use-event-listener';
import type { PropGetter } from '@julo-ui/system';

import { getWindow, useCloseEvent } from './usecase';
import { UseTooltipProps, UseTooltipReturn } from './types';

export function useTooltip(
  props: Partial<UseTooltipProps> = {},
): UseTooltipReturn {
  const {
    openDelay = 0,
    closeDelay = 0,
    closeOnClick = true,
    onOpen: onOpenProp,
    onClose: onCloseProp,
    placement,
    id,
    open: openProp,
    defaultOpen,
    arrowSize = 10,
    arrowPadding,
    modifiers,
    disabled,
    gutter,
    offset,
    'aria-invalid': ariaInvalid,
  } = props;

  const { open, onOpen, onClose } = useDisclosure({
    open: openProp,
    defaultOpen,
    onOpen: onOpenProp,
    onClose: onCloseProp,
  });

  const { referenceRef, getPopperProps, getArrowInnerProps, getArrowProps } =
    usePopper({
      enabled: open,
      placement,
      arrowPadding,
      modifiers,
      gutter,
      offset,
    });

  const uuid = useId();
  const uid = id ?? uuid;
  const tooltipId = `tooltip-${uid}`;

  const ref = useRef<HTMLElement>(null);

  const enterTimeout = useRef<number>();
  const clearEnterTimeout = useCallback(() => {
    if (enterTimeout.current) {
      clearTimeout(enterTimeout.current);
      enterTimeout.current = undefined;
    }
  }, []);

  const exitTimeout = useRef<number>();
  const clearExitTimeout = useCallback(() => {
    if (exitTimeout.current) {
      clearTimeout(exitTimeout.current);
      exitTimeout.current = undefined;
    }
  }, []);

  const closeNow = useCallback(() => {
    clearExitTimeout();
    onClose();
  }, [onClose, clearExitTimeout]);

  const dispatchCloseEvent = useCloseEvent(ref, closeNow);

  const openWithDelay = useCallback(() => {
    if (!disabled && !enterTimeout.current) {
      if (open) dispatchCloseEvent();
      const win = getWindow(ref);
      enterTimeout.current = win.setTimeout(onOpen, openDelay);
    }
  }, [dispatchCloseEvent, disabled, open, onOpen, openDelay]);

  const closeWithDelay = useCallback(() => {
    clearEnterTimeout();
    const win = getWindow(ref);
    exitTimeout.current = win.setTimeout(closeNow, closeDelay);
  }, [closeDelay, closeNow, clearEnterTimeout]);

  const onClick = useCallback(() => {
    if (open && closeOnClick) {
      closeWithDelay();
    }
  }, [closeOnClick, closeWithDelay, open]);

  useEffect(() => {
    if (!disabled) return;
    clearEnterTimeout();
    if (open) onClose();
  }, [disabled, open, onClose, clearEnterTimeout]);

  useEffect(() => {
    return () => {
      clearEnterTimeout();
      clearExitTimeout();
    };
  }, [clearEnterTimeout, clearExitTimeout]);

  useEventListener(() => ref.current, 'pointerleave', closeWithDelay);

  const getTriggerProps: PropGetter<'button'> = useCallback(
    (props = {}, _ref = null) => {
      return {
        ...props,
        type: 'button',
        ref: mergeRefs(ref, _ref, referenceRef),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onPointerEnter: callAllFn(props.onPointerEnter, (e: any) => {
          if (e.pointerType === 'touch') return;
          openWithDelay();
        }),
        onClick: callAllFn(props.onClick, onClick),
        onFocus: callAllFn(props.onFocus, openWithDelay),
        onBlur: callAllFn(props.onBlur, closeWithDelay),
        'aria-describedby': open ? tooltipId : undefined,
        'aria-invalid': ariaInvalid ?? ariaInvalid,
      };
    },
    [
      openWithDelay,
      closeWithDelay,
      open,
      tooltipId,
      onClick,
      referenceRef,
      ariaInvalid,
    ],
  );

  const getPositionerProps: PropGetter<'div'> = useCallback(
    (props = {}, forwardedRef = null) =>
      getPopperProps(
        {
          ...props,
          style: {
            ...props.style,
            [popperCSSVars.arrowSize.var]: arrowSize
              ? `${arrowSize}px`
              : undefined,
          },
        },
        forwardedRef,
      ),
    [getPopperProps, arrowSize],
  );

  const getContentProps: PropGetter<'div'> = useCallback(
    (props = {}, ref = null) => {
      const styles: React.CSSProperties = {
        ...props.style,
        position: 'relative',
      };

      return {
        ref,
        ...props,
        id: tooltipId,
        role: 'tooltip',
        style: styles,
      };
    },
    [tooltipId],
  );

  return {
    open,
    show: openWithDelay,
    hide: closeWithDelay,
    getTriggerProps,
    getContentProps,
    getPositionerProps,
    getArrowProps,
    getArrowInnerProps,
  };
}
