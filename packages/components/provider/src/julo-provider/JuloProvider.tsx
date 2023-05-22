import { ThemeProvider } from '../theme-provider';
import { JuloProviderProps } from './types';

const JuloProvider = (props: JuloProviderProps) => {
  const { children, theme } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default JuloProvider;
