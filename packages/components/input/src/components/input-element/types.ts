import { HTMLJuloProps } from '@julo-ui/system';

export interface InputElementProps extends HTMLJuloProps<'div'> {
  placement: 'left' | 'right';
}

export type InputRightElementProps = Omit<InputElementProps, 'placement'>;

export type InputLeftElementProps = Omit<InputElementProps, 'placement'>;
