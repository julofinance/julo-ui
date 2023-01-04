import { css } from "@emotion/css";
import { IInput } from "./types";

export const inputContainerCss = (props: IInput) => css`
  width: 100%;
  position: relative;
  background: white;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  margin-bottom: ${props.error? "6px" : 'inherit'}
`;

export const inputLabelCss = css`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #181818;
`;

export const inputWrapperCss = css`
  background: white;
  background-image: none;
  border: 1px solid #c2c2c2;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: flex;
`;

export const inputComponentCss = (props: IInput) => css`
  background: white;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  padding: 12px;
  font-weight: normal;
  font-size: 14px;
  display: block;
  border: ${props.error ? "1px solid #f44336" : 'none'};

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #797979;
    opacity: 0.5;
  }
`;

export const adornmentWrapperCss = css`
    align-self: center;
`;

export const errorCss = css`
  color: #f44336;
  font-size: 12px;
  position: relative;
  left: 0;
`;
