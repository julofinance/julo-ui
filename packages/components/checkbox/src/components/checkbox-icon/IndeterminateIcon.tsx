import { julo, PropsOf } from '@julo-ui/system';

const IndeterminateIcon = (props: PropsOf<typeof julo.svg>) => {
  return (
    <julo.svg
      width={16}
      height={16}
      viewBox='0 0 16 16'
      fill='white'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <julo.path d='M2.66797 8C2.66797 7.44772 3.11568 7 3.66797 7H12.3346C12.8869 7 13.3346 7.44772 13.3346 8C13.3346 8.55228 12.8869 9 12.3346 9H3.66797C3.11568 9 2.66797 8.55228 2.66797 8Z' />
    </julo.svg>
  );
};

export default IndeterminateIcon;
