import { ReactNode, useEffect, useState } from 'react';
import type {
  DataAttribute,
  IPosition,
  PlacesType,
  PositionStrategy,
  WrapperType,
} from '../types';

interface UseSelectAnchorProps {
  place?: PlacesType;
  offset?: number;
  id?: string;
  anchorSelect?: string;
  positionStrategy?: PositionStrategy;
  hidden?: boolean;
  as?: WrapperType;
  content?: ReactNode;
  position?: IPosition;
}

/**
 * Custom hook for selecting anchors and managing tooltip properties.
 *
 * @param {UseSelectAnchorProps} props - The configuration options for the hook.
 * @returns {Object} - An object containing the selected anchors and tooltip properties.
 */
const useSelectAnchors = ({
  content,
  place = 'top',
  offset = 10,
  as = 'div',
  positionStrategy = 'absolute',
  hidden = false,
  anchorSelect,
  id,
}: UseSelectAnchorProps) => {
  const [anchorsBySelect, setAnchorsBySelect] = useState<HTMLElement[]>([]);

  const [tooltipContent, setTooltipContent] = useState(content);
  const [tooltipPlace, setTooltipPlace] = useState(place);
  const [tooltipOffset, setTooltipOffset] = useState(offset);
  const [tooltipHidden, setTooltipHidden] = useState(hidden);
  const [tooltipAs, setTooltipAs] = useState<WrapperType>(as);
  const [tooltipPositionStrategy, setTooltipPositionStrategy] =
    useState(positionStrategy);
  const [activeAnchor, setActiveAnchor] = useState<HTMLElement | null>(null);

  /**
   * Retrieves data attributes from an anchor element.
   *
   * @param elementReference - The reference to the anchor element.
   * @returns An object containing the data attributes as key-value pairs.
   */
  const getDataAttributesFromAnchorElement = (
    elementReference: HTMLElement,
  ) => {
    const dataAttributes = elementReference
      ?.getAttributeNames()
      .reduce((acc, name) => {
        if (name.startsWith('data-tooltip-')) {
          const parsedAttribute = name.replace(
            /^data-tooltip-/,
            '',
          ) as DataAttribute;
          acc[parsedAttribute] = elementReference?.getAttribute(name) ?? null;
        }
        return acc;
      }, {} as Record<DataAttribute, string | null>);

    return dataAttributes;
  };

  /**
   * Applies all data attributes from the anchor element to the corresponding state variables.
   * Unset data attributes are reset to their default values.
   *
   * @param dataAttributes - The data attributes to apply.
   */
  const applyAllDataAttributesFromAnchorElement = (
    dataAttributes: Record<string, string | null>,
  ) => {
    const handleDataAttributes: Record<
      DataAttribute,
      (value: string | null) => void
    > = {
      place: (value) => {
        setTooltipPlace((value as PlacesType) ?? place);
      },
      content: (value) => {
        setTooltipContent(value ?? content);
      },
      offset: (value) => {
        setTooltipOffset(value === null ? offset : Number(value));
      },
      as: (value) => {
        setTooltipAs((value as WrapperType) ?? as);
      },
      'position-strategy': (value) => {
        setTooltipPositionStrategy(
          (value as PositionStrategy) ?? positionStrategy,
        );
      },
      hidden: (value) => {
        setTooltipHidden(value === null ? hidden : value === 'true');
      },
    };
    // reset unset data attributes to default values
    // without this, data attributes from the last active anchor will still be used
    Object.values(handleDataAttributes).forEach((handler) => handler(null));
    Object.entries(dataAttributes).forEach(([key, value]) => {
      handleDataAttributes[key as DataAttribute]?.(value);
    });
  };

  useEffect(() => {
    // this useEffect is for tooltip basic
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

    if (activeAnchor) {
      const dataAttributes = getDataAttributesFromAnchorElement(activeAnchor);
      applyAllDataAttributesFromAnchorElement(dataAttributes);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeAnchor, id, anchorSelect]);

  return {
    anchorsBySelect,
    tooltipContent,
    tooltipAs,
    tooltipHidden,
    tooltipOffset,
    tooltipPlace,
    tooltipPositionStrategy,
    activeAnchor,
    setActiveAnchor,
  };
};

export default useSelectAnchors;
