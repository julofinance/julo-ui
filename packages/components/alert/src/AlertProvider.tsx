import { createContext } from '@julo-ui/context';

import type { UseAlertProps } from './types';

interface AlertContextProps extends UseAlertProps {}

const [AlertProvider, useAlertContext] = createContext<AlertContextProps>({
  name: 'AlertContext',
  hookName: 'useAlertContext',
  providerName: '<AlertProvider />',
});

export { AlertProvider, useAlertContext };
