import { css } from '@emotion/react';
import { CheckboxGroupProps } from './types';

export const checkboxGroupCx = ({
  gap,
}: {
  gap?: CheckboxGroupProps['gap'];
}) => css`
  display: flex;

  &[data-orientation='horizontal'] {
    flex-direction: row;
    .julo-checkbox:not(:first-of-type) {
      margin-left: ${gap};
    }
  }

  &[data-orientation='vertical'] {
    flex-direction: column;
    .julo-checkbox:not(:first-of-type) {
      margin-top: ${gap};
    }
  }
`;
