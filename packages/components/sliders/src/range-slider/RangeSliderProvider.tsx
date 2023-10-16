import { createContext } from '@julo-ui/context';

import { UseRangeSliderReturn } from './use-range-slider';

interface RangeSliderContextProps
  extends Omit<UseRangeSliderReturn, 'getRootProps'> {}

const [RangeSliderProvider, useRangeSliderContext] =
  createContext<RangeSliderContextProps>({
    name: 'SliderContext',
    hookName: 'useRangeSliderContext',
    providerName: '<RangeSliderProvider />',
  });

export { RangeSliderProvider, useRangeSliderContext };
