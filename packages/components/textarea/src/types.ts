import { HTMLJuloProps } from '@julo-ui/system';

export interface TextAreaProps extends HTMLJuloProps<'textarea'> {
  isInvalid?: boolean;
  isResizeable?: boolean;
}
