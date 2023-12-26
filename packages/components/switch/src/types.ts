import type { DOMAttributes, HTMLJuloProps } from '@julo-ui/system';
import type { UseCheckboxProps } from '@julo-ui/checkbox';

export interface SwitchProps
  extends Omit<UseCheckboxProps, 'isIndeterminate'>,
    Omit<HTMLJuloProps<'label'>, keyof UseCheckboxProps> {
  /**
   * Additional props to be forwarded to the `input` element
   */
  inputProps?: DOMAttributes<HTMLInputElement>;
  inputRef?: React.RefObject<HTMLInputElement>;
}
