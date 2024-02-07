import { createContext } from '@julo-ui/context';

import { PinInputDescendantsProvider } from './use-otp-input';
import type { OtpInputProviderProps, UseOtpInputContextProps } from './types';

export const [UseOtpInputProvider, useOtpInputContext] =
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
    <PinInputDescendantsProvider value={descendants}>
      <UseOtpInputProvider value={context}>{children}</UseOtpInputProvider>
    </PinInputDescendantsProvider>
  );
}
