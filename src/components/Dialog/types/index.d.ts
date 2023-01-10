export interface Props {
  className?: string;
  children?: any;
  show: boolean;
  persistent?: boolean;
  onClose?: (value: boolean) => void;
  animation?: IAnimation;
}

export type IAnimation =
  | 'fade'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight';

export interface ICardCss {
  isOpen: boolean;
  animation?: IAnimation;
}
