import type { ElementType, ReactNode, CSSProperties, RefObject } from 'react';
import type { Middleware } from '@floating-ui/dom';

export type PlacesType =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type ChildrenType = ReactNode | Element | ElementType;

export type WrapperType = ElementType | 'div' | 'span';

/**
 * @description floating-ui strategy
 * @ref https://floating-ui.com/docs/computeposition#strategy
 */
export type PositionStrategy = 'absolute' | 'fixed';

/**
 * @description floating-ui middlewares
 * @ref https://floating-ui.com/docs/middleware
 */
export type Middlewares = Array<Middleware | null | undefined | false>;

export interface IPosition {
  x: number;
  y: number;
}

interface TooltipCommonProps {
  className?: string;
  classNameArrow?: string;
  place?: PlacesType;
  offset?: number;
  id?: string;
  anchorSelect?: string;
  openOnClick?: boolean;
  positionStrategy?: PositionStrategy;
  middlewares?: Middlewares;
  hidden?: boolean;
  noArrow?: boolean;
  clickable?: boolean;
  style?: CSSProperties;
  position?: IPosition;
  setIsOpen?: (value: boolean) => void;
  isOpen?: boolean;
  as?: WrapperType;
}

export interface TooltipProps extends TooltipCommonProps {
  activeAnchor: HTMLElement | null;
  setActiveAnchor: (anchor: HTMLElement | null) => void;
  content?: ReactNode;
}

export interface TooltipControllerProps extends TooltipCommonProps {
  content?: string;
  render?: (render: {
    content: string | null;
    activeAnchor: HTMLElement | null;
  }) => ChildrenType;
  children?: ReactNode;
}

export type DataAttribute =
  | 'place'
  | 'content'
  | 'offset'
  | 'as'
  | 'position-strategy'
  | 'hidden';

export interface UseToolipPositionProps {
  place?: PlacesType;
  offset?: number;
  tooltipRef: RefObject<HTMLDivElement>;
  arrowRef: RefObject<null>;
  positionStrategy?: PositionStrategy;
  position?: IPosition;
  middlewares?: Middlewares;
  activeAnchor: HTMLElement | null;
  isMounted: boolean;
}
