import { useCallback, useState } from 'react';

import { computeTooltipPosition } from '../../utils/compute-positions';
import { IPosition, PlacesType, UseToolipPositionProps } from '../types';

/**
 * Custom hook for managing the position of a tooltip.
 * @param {UseToolipPositionProps} props - The properties for configuring the tooltip position.
 * @returns {Object} - An object containing the actual placement, tooltip styles, arrow styles, and a function to update the tooltip position.
 */
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

  /**
   * Overrides the position of the tooltip based on the provided coordinates.
   * @param {IPosition} position - The x and y coordinates of the tooltip.
   */
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

  /**
   * Updates the position of the tooltip based on the provided parameters.
   * If a specific position is set, it overrides the regular positioning.
   * @returns {void}
   */
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
