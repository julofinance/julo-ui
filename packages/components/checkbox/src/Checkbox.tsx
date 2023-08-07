import { forwardRef, julo } from '@julo-ui/system';

import { checkboxCx } from './styles';
import type { CheckboxProps } from './types';

const Checkbox = forwardRef<CheckboxProps, 'div'>((props, ref) => {
  return (
    <julo.div ref={ref} __css={checkboxCx}>
      Hello World
    </julo.div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
