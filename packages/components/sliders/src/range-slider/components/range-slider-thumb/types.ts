import { HTMLJuloProps, DOMAttributes } from '@julo-ui/system';

export interface RangeSliderThumbProps extends HTMLJuloProps<'div'> {
  index: number;
  /**
   * Additional props to be forwarded to the `input` element
   */
  inputProps?: DOMAttributes<HTMLInputElement>;
  inputRef?: React.RefObject<HTMLInputElement>;
}
