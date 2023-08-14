import { useRef } from 'react';

import { mergeRefs } from '@julo-ui/dom-utils';
import { cx, forwardRef, julo } from '@julo-ui/system';

import useListenInput from './usecase/use-listen-input';
import useHandleChildren from './usecase/use-handle-children';
import { InputGroupProps } from './types';
import { inputGroupCx } from './styles';

const InputGroup = forwardRef<InputGroupProps, 'div'>((props, ref) => {
  const { className, children, ...resProps } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);

  const { clones, extendedInputGroupCx } = useHandleChildren({
    children,
    inputRef,
  });

  useListenInput({
    groupRef,
    inputRef,
  });

  return (
    <julo.div
      ref={mergeRefs(groupRef, ref)}
      className={cx('julo-input-group', className)}
      {...resProps}
      __css={[inputGroupCx, ...extendedInputGroupCx]}
    >
      {clones}
    </julo.div>
  );
});

InputGroup.displayName = 'InputGroup';

export default InputGroup;
