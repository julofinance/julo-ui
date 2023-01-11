import { css } from '@emotion/css';
import { NT50, NT20 } from "@julofinance/color-token";
import { BSheetContainer, BSheetWrapper } from './types';

const BSHEET_MAX_H_OFFSET =  "7.5rem";

export const bSheetWrapper = (props: BSheetWrapper) => css`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  bottom: 0;
  display: flex;
  background-color: rgba(24, 24, 24, 0.25);
  transition: all 0.3s ease-in-out;
  z-index: 2;
  opacity: ${props.isOpen ? 1 : 0};
  pointer-events: ${props.isOpen ? "visible" : "none"};
`;

export const bSheetContainer = (props: BSheetContainer) => css`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  width: 100%;
  max-height: calc(100% - ${BSHEET_MAX_H_OFFSET});
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.14);
  border-radius: 16px 16px 0 0;
  background-color: white;
  transform: ${props.isOpen ? props.isDragging ? `translateY(${props.yPos}px)` :  "translateY(0)" : "translateY(200px)"};
  transition: all 0.3s ease-in-out;
  touch-action: none;
`;

export const bSheetHeader = css`
  padding: 16px;
  border-bottom: 1px solid ${NT20}
`

export const bSheetContent = css`
  padding: 16px;
  overflow: auto;
`

export const bSheetFooter = css`
  padding: 16px;
`

export const dBarWrapper = css`
  display: flex;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  cursor: ns-resize;
  touch-action: none;
`;

export const dBar = css`
  margin: auto;
  width: 22.222%;
  height: 4px;
  background-color: ${NT50};
  border-radius: 8px;
  pointer-events: none;
`;