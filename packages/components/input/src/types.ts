import { HTMLJuloProps } from '@julo-ui/system';

export interface InputProps extends Omit<HTMLJuloProps<'input'>, 'size'> {
  /**
   * The native HTML `size` attribute to be passed to the `input`
   */
  htmlSize?: number;
  isInvalid?: boolean;
}
