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
  NT100,
  PR10,
  PR30,
} from '@julofinance/color-token';
import { IInput } from './types';

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
`;

export const inputWrapperCss = css`
  background: ${NT10};
  background-image: none;
  border: 1px solid ${NT40};
  border-radius: 8px;
  width: 100%;
  height: 100%;
  display: flex;
  font-family: 'Nunito';
`;

export const inputComponentCss = (props: IInput) => css`
  background: white;
  border-radius: inherit;
  color: ${NT100};
  width: 100%;
  height: 100%;
  padding: 12px;
  font-weight: normal;
  font-family: 'Nunito';
  font-size: 14px;
  display: block;
  border: ${props.error ? '1px solid #f44336' : 'none'};
  caret-color: ${PR30};

  &:focus {
    outline: ${props.error ? 'none' : `1px solid ${PR10}`};
  }
  &:disabled {
    background: ${NT30};
    border-color: ${NT50};
    color: ${NT70};
    &::placeholder {
      color: ${NT50};
    }
  }
  &::placeholder {
    color: ${NT70};
  }
`;

export const adornmentWrapperCss = css`
  align-self: center;
`;

export const errorCss = css`
  color: ${ER30};
  font-size: 10px;
  position: relative;
  left: 0;
  font-family: 'Nunito';
  margin-top: 2px;
`;

export const helperTextCss = css`
  color: ${NT80};
  margin-top: 2px;
  font-size: 10px;
  position: relative;
  left: 0;
  font-family: 'Nunito';
`;
