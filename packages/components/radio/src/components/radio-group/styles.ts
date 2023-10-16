import { css } from '@emotion/react';
import { RadioGroupProps } from './types';

export const radioGroupCx = ({ gap }: { gap?: RadioGroupProps['gap'] }) => css`
  display: flex;

  &[data-orientation='horizontal'] {
    flex-direction: row;
    .julo-radio:not(:first-of-type) {
      margin-left: ${gap};
    }
  }

  &[data-orientation='vertical'] {
    flex-direction: column;
    .julo-radio:not(:first-of-type) {
      margin-top: ${gap};
    }
  }
`;
