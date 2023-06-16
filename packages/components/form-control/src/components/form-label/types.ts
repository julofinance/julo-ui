import { HTMLJuloProps } from '@julo-ui/system';

export interface FormLabelProps extends HTMLJuloProps<'label'> {
  requiredIndicator?: React.ReactNode | null;
  optionalIndicator?: React.ReactNode;
}

export type RequiredIndicatorProps = HTMLJuloProps<'span'>;
