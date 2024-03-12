import { useCallback, useEffect, useRef, useState } from 'react';
import { autoUpdate } from '@floating-ui/dom';
import { useSafeLayoutEffect } from '@julo-ui/use-safe-layout-effect';
import useDelayedMounting from '@julo-ui/use-delay-mounting';

import { useHandlePosition, useSelectAnchors } from './usecase';
import debounce from '../utils/debounce';
import { ChildrenType, ShowTooltipProps } from './types';

export const useTooltip = (props: ShowTooltipProps) => {
  const {
    id,
    place = 'top',
    clickable = false,
    positionStrategy = 'absolute',
    position,
    openOnClick = false,
    isOpen,
    setIsOpen,
    offset,
    middlewares,
    content,
    anchorSelect,
    hidden,
    tooltipArrowRef,
    tooltipRef,
    children,
  } = props;

  const tooltipHideDelayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [rendered, setRendered] = useState(false);

  const hoveringTooltip = useRef(false);
  const [anchorsBySelect, setAnchorsBySelect] = useState<HTMLElement[]>([]);
  const mounted = useRef(false);

  const { activeAnchor, setActiveAnchor, tooltipContent } = useSelectAnchors({
    content,
    place,
    offset,
    position,
    positionStrategy,
    hidden,
    anchorSelect,
    id,
  });

  const { actualPlacement, arrowStyles, tooltipStyles, updateTooltipPosition } =
    useHandlePosition({
      activeAnchor,
      arrowRef: tooltipArrowRef,
      tooltipRef,
      isMounted: mounted.current,
      middlewares,
      offset,
      place,
      position,
      positionStrategy,
    });

  const {
    state: mountState,
    show: showElement,
    hide: hideElement,
  } = useDelayedMounting();

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

  useEffect(() => {
    if (!showTooltip) {
      /**
       * this fixes weird behavior when switching between two anchor elements very quickly
       * remove the timeout and switch quickly between two anchor elements to see it
       *
       * in practice, this means the tooltip is not immediately removed from the DOM on hide
       */

      const timeout = setTimeout(() => {
        setRendered(false);
      }, 150);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showTooltip]);

  const handleShowElement = useCallback(
    (value: boolean) => {
      if (value) showElement();
      else hideElement();
    },
    [hideElement, showElement],
  );

  const handleShow = (value: boolean) => {
    if (!mounted.current) {
      return;
    }
    if (value) {
      setRendered(true);
    }
    /**
     * wait for the component to render and calculate position
     * before actually showing
     */
    setTimeout(() => {
      if (!mounted.current) {
        return;
      }
      setIsOpen?.(value);
      if (isOpen === undefined) {
        setShowTooltip(value);
        handleShowElement(value);
      }
    }, 10);
  };

  /**
   * this replicates the effect from `handleShow()`
   * when `isOpen` is changed from outside
   */
  useEffect(() => {
    if (isOpen === undefined) {
      return () => null;
    }
    if (isOpen) {
      setRendered(true);
    }
    const timeout = setTimeout(() => {
      setShowTooltip(isOpen);
      handleShowElement(isOpen);
    }, 10);
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, setShowTooltip]);

  const handleShowTooltip = (event?: Event) => {
    if (!event) {
      return;
    }
    const target = (event.currentTarget ?? event.target) as HTMLElement | null;
    if (!target?.isConnected) {
      /**
       * this happens when the target is removed from the DOM
       * at the same time the tooltip gets triggered
       */
      setActiveAnchor(null);
      return;
    }
    handleShow(true);

    setActiveAnchor(target);
  };

  const handleHideTooltipDelayed = (delay: number) => {
    if (tooltipHideDelayTimerRef.current) {
      clearTimeout(tooltipHideDelayTimerRef.current);
    }

    tooltipHideDelayTimerRef.current = setTimeout(() => {
      if (hoveringTooltip.current) {
        return;
      }
      handleShow(false);
    }, delay);
  };

  const handleHideTooltip = () => {
    if (clickable) {
      // allow time for the mouse to reach the tooltip, in case there's a gap
      handleHideTooltipDelayed(100);
    } else {
      handleShow(false);
    }
  };

  const handleClickTooltipAnchor = (event?: Event) => {
    handleShowTooltip(event);
  };

  const handleClickOutsideAnchors = (event: MouseEvent) => {
    const anchors = [...anchorsBySelect];
    if (
      anchors.some((anchor) => anchor?.contains(event.target as HTMLElement))
    ) {
      return;
    }
    if (tooltipRef.current?.contains(event.target as HTMLElement)) {
      return;
    }
    handleShow(false);
  };

  // debounce handler to prevent call twice when
  // mouse enter and focus events being triggered toggether
  const debouncedHandleShowTooltip = debounce(handleShowTooltip, 50, true);
  const debouncedHandleHideTooltip = debounce(handleHideTooltip, 50, true);

  useEffect(() => {
    if (mountState === 'mounted' || mountState === 'unmounted') {
      const elementRefs = new Set();
      const tooltipCurrent = tooltipRef.current;

      anchorsBySelect.forEach((anchor) => {
        elementRefs.add({ current: anchor });
      });

      let updateTooltipCleanup: null | (() => void) = null;
      if (activeAnchor && tooltipCurrent) {
        updateTooltipCleanup = autoUpdate(
          activeAnchor as HTMLElement,
          tooltipCurrent as HTMLElement,
          updateTooltipPosition,
          {
            ancestorResize: true,
            elementResize: true,
            layoutShift: true,
          },
        );
      }

      const enabledEvents: {
        event: string;
        listener: (event?: Event) => void;
      }[] = [];

      if (openOnClick) {
        window.addEventListener('click', handleClickOutsideAnchors);
        enabledEvents.push({
          event: 'click',
          listener: handleClickTooltipAnchor,
        });
      } else {
        enabledEvents.push(
          { event: 'mouseenter', listener: debouncedHandleShowTooltip },
          { event: 'mouseleave', listener: debouncedHandleHideTooltip },
          { event: 'focus', listener: debouncedHandleShowTooltip },
          { event: 'blur', listener: debouncedHandleHideTooltip },
        );
      }

      const handleMouseEnterTooltip = () => {
        hoveringTooltip.current = true;
      };

      const handleMouseLeaveTooltip = () => {
        hoveringTooltip.current = false;
        handleHideTooltip();
      };

      if (clickable && !openOnClick) {
        tooltipCurrent?.addEventListener('mouseenter', handleMouseEnterTooltip);
        tooltipCurrent?.addEventListener('mouseleave', handleMouseLeaveTooltip);
      }

      enabledEvents.forEach(({ event, listener }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        elementRefs.forEach((reference: any) => {
          reference.current?.addEventListener(event, listener);
        });
      });

      return () => {
        updateTooltipCleanup?.();

        if (openOnClick) {
          window.removeEventListener('click', handleClickOutsideAnchors);
        }
        if (clickable && !openOnClick) {
          tooltipCurrent?.removeEventListener(
            'mouseenter',
            handleMouseEnterTooltip,
          );
          tooltipCurrent?.removeEventListener(
            'mouseleave',
            handleMouseLeaveTooltip,
          );
        }
        enabledEvents.forEach(({ event, listener }) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          elementRefs.forEach((reference: any) => {
            reference.current?.removeEventListener(event, listener);
          });
        });
      };
    }

    /**
     * rendered is also a dependency to ensure anchor observers are re-registered
     * since `tooltipRef` becomes stale after removing/adding the tooltip to the DOM
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    activeAnchor,
    updateTooltipPosition,
    rendered,
    anchorsBySelect,
    mountState,
  ]);

  useEffect(() => {
    if (activeAnchor && tooltipRef.current) {
      updateTooltipPosition();
    }
  }, [updateTooltipPosition, activeAnchor, tooltipRef]);

  useEffect(() => {
    const anchors = [...anchorsBySelect];
    if (!activeAnchor || !anchors.includes(activeAnchor)) {
      /**
       * if there is no active anchor,
       * or if the current active anchor is not amongst the allowed ones,
       * reset it
       */
      setActiveAnchor(anchorsBySelect[0]);
    }
  }, [anchorsBySelect, activeAnchor, setActiveAnchor]);

  useEffect(() => {
    // choose between basic usage or using anchorSelect property
    let selector = anchorSelect;
    if (!selector && id) {
      selector = `[data-tooltip-id='${id}']`;
    }
    if (!selector) {
      return;
    }
    try {
      const anchors = Array.from(
        document.querySelectorAll<HTMLElement>(selector),
      );
      setAnchorsBySelect(anchors);
    } catch {
      setAnchorsBySelect([]);
    }
  }, [id, anchorSelect]);

  /**
   * content priority: children < render or content
   * children should be lower priority so that it can be used as the "default" content
   */
  let renderedContent: ChildrenType = children;

  if (tooltipContent) {
    renderedContent = tooltipContent;
  }

  const isShow = !hidden && !!renderedContent && showTooltip;

  return {
    isShow,
    mountState,
    actualPlacement,
    arrowStyles,
    tooltipStyles,
    renderedContent,
  };
};
