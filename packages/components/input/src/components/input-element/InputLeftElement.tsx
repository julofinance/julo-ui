import { forwardRef } from '@julo-ui/system';

import InputElement from './InputElement';
import type { InputLeftElementProps } from './types';

const InputLeftElement = forwardRef<InputLeftElementProps, 'div'>(
  (props, ref) => {
    return <InputElement ref={ref} placement='left' {...props} />;
  },
);

/**
 * id used for InputGroup
 */
InputLeftElement.id = 'input-left-element';
InputLeftElement.displayName = 'InputLeftElement';

export default InputLeftElement;
