import { createContext } from '@julo-ui/context';

import { UseSliderReturn } from './use-slider';

interface SliderContextProps
  extends Omit<UseSliderReturn, 'getInputProps' | 'getRootProps'> {}

const [SliderProvider, useSliderContext] = createContext<SliderContextProps>({
  name: 'SliderContext',
  hookName: 'useSliderContext',
  providerName: '<SliderProvider />',
});

export { SliderProvider, useSliderContext };
