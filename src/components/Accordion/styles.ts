import { css } from '@emotion/css';
import { NT30 } from "@julofinance/color-token";
import { AcButtonChevronProps, AcPanelProps } from './types';

export const acButton = css`
  display: inline-flex;
  background-color: transparent;
  border: none;
  color: inherit;
  padding-top: 16px;
  padding-bottom: 16px;
  margin: 0;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  border-bottom: 1px solid ${NT30};
`

export const acButtonChevron = (props: AcButtonChevronProps) => css`
  transition: transform .2s ease-in-out;
  transform: rotate(${props.isOpen ? '-180deg' : '0'});
`

export const acPanel = (props: AcPanelProps) => css`
  transition: max-height .2s ease;
  max-height: ${props.maxHeight};
  overflow: hidden;
`