import { css } from '@emotion/css';

import type { AvatarProps } from './types';

const sizeMap = (props: AvatarProps) => {
  let styles;

  if (props.size) {
    styles = `
            width: ${props.size};
            height: ${props.size};
        `;
  } else if (props.small) {
    styles = `
            width: 32px;
            height: 32px;
        `;
  } else if (props.large) {
    styles = `
            width: 120px;
            height: 120px;
        `;
  } else if (props.medium) {
    styles = `
            width: 48px;
            height: 48px;
        `;
  }

  return styles;
};

export const styledAvatar = (props: AvatarProps) => css`
  ${sizeMap(props)}
  display: inline-block;
  border-radius: 50%;
  margin: ${props.margin};
  background: url(${props.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
