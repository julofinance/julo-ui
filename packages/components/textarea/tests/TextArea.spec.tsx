import { testA11y } from '@julo-ui/rtl-utils';

import TextArea from '../src';

test('should passes a11y test', async () => {
  await testA11y(<TextArea />, {
    axeOptions: {
      rules: { label: { enabled: false } },
    },
  });
});
