import { useEffect, useState, useRef, useImperativeHandle } from 'react';
import { forwardRef } from '@julo-ui/system';
import Tooltip from './Tooltip';
import type {
  PositionStrategy,
  PlacesType,
  WrapperType,
  DataAttribute,
  TooltipProps,
  ChildrenType,
  TooltipControllerProps,
} from './types';

const TooltipController = forwardRef<TooltipControllerProps, 'div'>(
  (props, ref) => {
    const {
      id,
      anchorSelect,
      content,
      className,
      classNameArrow,
      place = 'top',
      offset = 10,
      as = 'div',
      children = null,
      openOnClick = false,
      positionStrategy = 'absolute',
      middlewares,
      hidden = false,
      noArrow = false,
      clickable = false,
      style,
      position,
      isOpen,
      setIsOpen,
    } = props;

    const tooltipRef = useRef<HTMLDivElement>(null);
    const [tooltipContent, setTooltipContent] = useState(content);
    const [tooltipPlace, setTooltipPlace] = useState(place);
    const [tooltipOffset, setTooltipOffset] = useState(offset);
    const [tooltipHidden, setTooltipHidden] = useState(hidden);
    const [tooltipAs, setTooltipAs] = useState<WrapperType>(as);
    const [tooltipPositionStrategy, setTooltipPositionStrategy] =
      useState(positionStrategy);
    const [activeAnchor, setActiveAnchor] = useState<HTMLElement | null>(null);

    useImperativeHandle(
      ref,
      () => {
        return tooltipRef.current;
      },
      [],
    );

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
      setTooltipContent(content);
    }, [content]);

    useEffect(() => {
      setTooltipPlace(place);
    }, [place]);

    useEffect(() => {
      setTooltipOffset(offset);
    }, [offset]);

    useEffect(() => {
      setTooltipHidden(hidden);
    }, [hidden]);

    useEffect(() => {
      setTooltipPositionStrategy(positionStrategy);
    }, [positionStrategy]);

    useEffect(() => {
      const elementRefs = new Set();

      let selector = anchorSelect;
      if (!selector && id) {
        selector = `[data-tooltip-id='${id}']`;
      }
      if (selector) {
        const anchorsBySelect =
          document.querySelectorAll<HTMLElement>(selector);
        anchorsBySelect.forEach((anchor) => {
          elementRefs.add({ current: anchor });
        });
      }

      if (!elementRefs.size) {
        return;
      }

      if (activeAnchor) {
        const dataAttributes = getDataAttributesFromAnchorElement(activeAnchor);
        applyAllDataAttributesFromAnchorElement(dataAttributes);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeAnchor, anchorSelect, id]);

    /**
     * content priority: children < render or content
     * children should be lower priority so that it can be used as the "default" content
     */
    let renderedContent: ChildrenType = children;

    if (tooltipContent) {
      renderedContent = tooltipContent;
    }

    const tooltipProps: TooltipProps = {
      id,
      anchorSelect,
      className,
      classNameArrow,
      content: renderedContent,
      place: tooltipPlace,
      offset: tooltipOffset,
      as: tooltipAs,
      openOnClick,
      positionStrategy: tooltipPositionStrategy,
      middlewares,
      hidden: tooltipHidden,
      noArrow,
      clickable,
      style,
      position,
      isOpen,
      setIsOpen,
      activeAnchor,
      setActiveAnchor: (anchor: HTMLElement | null) => setActiveAnchor(anchor),
    };

    return <Tooltip ref={tooltipRef} {...tooltipProps} />;
  },
);

Tooltip.displayName = 'Tooltip';

export default TooltipController;
