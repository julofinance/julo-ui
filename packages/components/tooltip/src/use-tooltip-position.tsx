import { useCallback, useState } from 'react';

import { computeTooltipPosition } from '../utils/compute-positions';
import { IPosition, PlacesType, UseToolipPositionProps } from './types';

const useTooltipPosition = ({
  place,
  offset,
  tooltipRef,
  arrowRef,
  positionStrategy,
  position,
  middlewares,
  activeAnchor,
  isMounted,
}: UseToolipPositionProps) => {
  const [actualPlacement, setActualPlacement] = useState(place);
  const [tooltipStyles, setTooltipStyles] = useState({});
  const [arrowStyles, setArrowStyles] = useState({});

  const overrideTooltipPosition = ({ x, y }: IPosition) => {
    // https://floating-ui.com/docs/virtual-elements
    const virtualElement = {
      getBoundingClientRect: () => {
        return {
          x,
          y,
          width: 0,
          height: 0,
          top: y,
          left: x,
          right: x,
          bottom: y,
        };
      },
    } as Element;

    computeTooltipPosition({
      place,
      offset,
      elementReference: virtualElement,
      tooltipReference: tooltipRef.current,
      tooltipArrowReference: arrowRef.current,
      strategy: positionStrategy,
      middlewares,
    }).then((computedStylesData) => {
      if (Object.keys(computedStylesData.tooltipStyles).length) {
        setTooltipStyles(computedStylesData.tooltipStyles);
      }
      if (Object.keys(computedStylesData.tooltipArrowStyles).length) {
        setArrowStyles(computedStylesData.tooltipArrowStyles);
      }
      setActualPlacement(computedStylesData.place as PlacesType);
    });
  };

  const updateTooltipPosition = useCallback(() => {
    if (position) {
      // if `position` is set, override regular positioning
      overrideTooltipPosition(position);
      return;
    }
    computeTooltipPosition({
      place,
      offset,
      elementReference: activeAnchor,
      tooltipReference: tooltipRef.current,
      tooltipArrowReference: arrowRef.current,
      strategy: positionStrategy,
      middlewares,
    }).then((computedStylesData) => {
      if (!isMounted) {
        // invalidate computed positions after remount
        return;
      }
      if (Object.keys(computedStylesData.tooltipStyles).length) {
        setTooltipStyles(computedStylesData.tooltipStyles);
      }
      if (Object.keys(computedStylesData.tooltipArrowStyles).length) {
        setArrowStyles(computedStylesData.tooltipArrowStyles);
      }
      setActualPlacement(computedStylesData.place as PlacesType);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeAnchor, place, offset, positionStrategy, position, middlewares]);

  return {
    actualPlacement,
    tooltipStyles,
    arrowStyles,
    updateTooltipPosition,
  };
};

export default useTooltipPosition;
