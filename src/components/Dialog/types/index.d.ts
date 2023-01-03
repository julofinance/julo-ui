export interface Props {
    containerClassName?: string;
    contentClassName?: string;
    children?: any;
    show: boolean;
    clickOutside?: boolean;
    onClose?: (value: boolean) => void;
    animation?: IAnimation;
  }

export type IAnimation = 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';

export interface ICardCss {
  isOpen: boolean;
  animation?: IAnimation; 
}


  