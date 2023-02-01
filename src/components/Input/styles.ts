import { css } from '@emotion/css';
import {
  NT40,
  NT10,
  NT80,
  NT90,
  NT70,
  NT50,
  NT30,
  ER30,
  ER20,
  NT100,
  PR10,
  PR30,
} from '@julofinance/color-token';
import { IInput, IInputState } from './types';

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
  input[type='number'] {
    -moz-appearance: textfield;
  }
  margin-bottom: ${props.error ? '6px' : 'inherit'};
`;

export const inputLabelCss = css`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: ${NT90};
  font-family: 'Nunito';
  padding-bottom: 4px;
`;

const getBorderColor = ({ isFocused, isError, hasValue }: IInputState) => {
  let borderColor = NT40;

  if (isError) {
    borderColor = ER20;
  } else if (isFocused) {
    borderColor = PR10;
  } else if (hasValue) {
    borderColor = NT50;
  }
  return borderColor;
};

export const inputWrapperCss = (state: IInputState) => css`
  background: ${NT10};
  background-image: none;
  border: 1px solid ${getBorderColor(state)};
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  font-family: 'Nunito';
`;

export const inputComponentCss = (
  preAppend: boolean,
  append: boolean,
) => css`
  background: white;
  border: none;
  border-radius: inherit;
  color: ${NT100};
  width: 100%;
  height: 100%;
  padding: 12px ${append ? '8px' : '12px'} 12px
    ${preAppend ? '8px' : '12px'};
  font-weight: normal;
  font-family: 'Nunito';
  font-size: 14px;
  display: block;
  caret-color: ${PR30};
  &:focus {
    outline: none;
  }
  &:disabled {
    background: ${NT30};
    color: ${NT70};
    &::placeholder {
      color: ${NT50};
    }
  }
  &::placeholder {
    color: ${NT70};
  }
`;

export const appendWrapperCss = css`
  align-self: center;
  display: flex;
`;

export const errorCss = css`
  color: ${ER30};
  font-size: 10px;
  position: relative;
  left: 0;
  font-family: 'Nunito';
  padding-top: 4px;
`;

export const helperTextCss = css`
  color: ${NT80};
  padding-top: 4px;
  font-size: 10px;
  position: relative;
  left: 0;
  font-family: 'Nunito';
`;
