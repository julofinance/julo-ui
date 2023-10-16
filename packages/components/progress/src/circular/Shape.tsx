import { julo, HTMLJuloProps } from '@julo-ui/system';
import { rotate } from './styles';

interface ShapeProps extends HTMLJuloProps<'svg'> {
  size?: string | number;
  /**
   * @default false
   */
  isIndeterminate?: boolean;
}

export const Shape = (props: ShapeProps) => {
  const { size, isIndeterminate, ...rest } = props;
  return (
    <julo.svg
      viewBox='0 0 100 100'
      sx={{
        width: size,
        height: size,
        animation: isIndeterminate ? `${rotate} 2s linear infinite` : undefined,
      }}
      {...rest}
    />
  );
};

Shape.displayName = 'Shape';
