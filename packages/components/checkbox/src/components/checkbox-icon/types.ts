import { HTMLJuloProps } from '@julo-ui/system';

export interface CheckboxIconProps extends HTMLJuloProps<'svg'> {
  /**
   * @default false
   */
  isIndeterminate?: boolean;
  /**
   * @default false
   */
  isChecked?: boolean;
}
