import { HTMLJuloProps } from '@julo-ui/system';

export type FormInfoGroupProps =
  | FormInfoGroupWithoutCounterProps
  | FormInfoGroupWithCounterProps;

export interface FormInfoGroupWithCounterProps extends HTMLJuloProps<'div'> {
  showCounter: true;
  maxTextLength: number;
  currentTextLength: number;
}

export interface FormInfoGroupWithoutCounterProps extends HTMLJuloProps<'div'> {
  showCounter?: false;
}
