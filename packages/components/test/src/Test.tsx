import { forwardRef, julo } from '@julo-ui/system';

import { testCx } from './styles';
import type { TestProps } from './types';

const Test = forwardRef<TestProps, 'div'>((props, ref) => {
  return (
    <julo.div ref={ref} __css={testCx}>
      Hello World
    </julo.div>
  );
});

Test.displayName = 'Test';

export default Test;
