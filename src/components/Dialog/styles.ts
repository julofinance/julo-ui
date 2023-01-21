import { css } from '@emotion/css';
import { OVERLAY70 } from '@julofinance/color-token';
import { IAnimation, ICardCss } from './types';

export const dialogWrapperCss = (isOpen: boolean) => css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${OVERLAY70};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  z-index: 99;
  opacity: ${isOpen ? 1 : 0};
  pointer-events: ${isOpen ? 'visible' : 'none'};
`;

const setTransform = (animation?: IAnimation) => {
  switch (animation) {
    case 'fade':
      return 'none';
    case 'slideUp':
      return 'translateY(-200px)';
    case 'slideDown':
      return 'translateY(200px)';
    case 'slideLeft':
      return 'translateX(-200px)';
    case 'slideRight':
      return 'translateX(200px)';
    default:
      return 'translateX(200px)';
  }
};

export const cardCss = (props: ICardCss) => css`
  padding: 16px;
  max-height: 93vh;
  overflow: auto;
  max-width: 500;
  min-width: 320;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  background-color: #fff;
  transform: ${props.isOpen ? 'translateX(0)' : setTransform(props.animation)};
  transition: all 0.3s ease-in-out;
`;
