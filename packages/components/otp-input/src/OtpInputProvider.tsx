import { createContext } from '@julo-ui/context';

import {
  OtpInputDescendantsProvider,
  useOtpInputDescendants,
} from './use-otp-input';
import type { OtpInputProviderProps, UseOtpInputContextProps } from './types';

export const [OtpInputHookProvider, useOtpInputHookContext] =
  createContext<UseOtpInputContextProps>({
    name: 'UseOtpInputContext',
    providerName: '<UseOtpInputProvider />',
  });

export function OtpInputProvider(props: OtpInputProviderProps) {
  const {
    children,
    value: { descendants, ...context },
  } = props;

  return (
    <OtpInputDescendantsProvider value={descendants}>
      <OtpInputHookProvider value={context}>{children}</OtpInputHookProvider>
    </OtpInputDescendantsProvider>
  );
}

export function useOtpInputContext() {
  const descendants = useOtpInputDescendants();
  const hookContext = useOtpInputHookContext();

  return { descendants, ...hookContext };
}
