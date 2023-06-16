import { forwardRef } from '@julo-ui/system';

import InputElement from './InputElement';
import type { InputRightElementProps } from './types';

const InputRightElement = forwardRef<InputRightElementProps, 'div'>(
  (props, ref) => {
    return <InputElement ref={ref} placement='right' {...props} />;
  },
);

/**
 * id used for InputGroup
 */
InputRightElement.id = 'input-right-element';
InputRightElement.displayName = 'InputRightElement';

export default InputRightElement;
