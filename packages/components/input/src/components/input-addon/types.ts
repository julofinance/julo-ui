import { HTMLJuloProps } from '@julo-ui/system';

export interface InputAddonProps extends HTMLJuloProps<'div'> {
  placement: 'left' | 'right';
}

export type InputLeftAddonProps = Omit<InputAddonProps, 'placement'>;

export type InputRightAddonProps = Omit<InputAddonProps, 'placement'>;
