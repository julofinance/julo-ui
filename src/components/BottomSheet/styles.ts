import { css } from '@emotion/css';
import { NT50 } from "@julofinance/color-token";
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
  margin-top: auto;
  width: 100%;
  padding: 16px;
  max-height: calc(100% - ${BSHEET_MAX_H_OFFSET});
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.14);
  border-radius: 16px 16px 0 0;
  background-color: white;
  transform: ${props.isOpen ? "translateY(0)" : "translateY(200px)"};
  transition: all 0.3s ease-in-out;
`;

export const bSheetHeader = css`
  margin-bottom: 16px;
`

export const bSheetContent = css`
  max-height: calc(100vh - ${BSHEET_MAX_H_OFFSET});
  overflow: auto;
`

export const dBarWrapper = css`
  display: flex;
  width: 100%;
`;

export const dBar = css`
  margin: auto;
  width: 40px;
  height: 4px;
  background-color: ${NT50};
  border-radius: 8px;
  margin-bottom: 16px;
`;