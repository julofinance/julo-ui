import { Global } from '@emotion/react';

import globalConfig from './global-config';
import globalVariable from './global-variable';
import globalTypography from './global-typography';
import { Theme } from '../types';

const GlobalStyle = (theme: Theme) => {
  return (
    <>
      <Global styles={globalConfig} />
      <Global styles={globalVariable(theme)} />
      <Global styles={globalTypography} />
    </>
  );
};

export default GlobalStyle;
