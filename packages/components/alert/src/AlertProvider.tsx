import { createContext } from '@julo-ui/context';

import type { AlertProps } from './types';

type AlertContextProps = Pick<AlertProps, 'status'>;

const [AlertProvider, useAlertContext] = createContext<AlertContextProps>({
  name: 'AlertContext',
  hookName: 'useAlertContext',
  providerName: '<AlertProvider />',
});

export { AlertProvider, useAlertContext };
