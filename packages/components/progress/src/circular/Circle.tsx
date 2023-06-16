import { julo, HTMLJuloProps } from '@julo-ui/system';

export const Circle = (props: HTMLJuloProps<'circle'>) => (
  <julo.circle cx={50} cy={50} r={42} fill='transparent' {...props} />
);

Circle.displayName = 'Circle';
