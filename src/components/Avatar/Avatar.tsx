import React, { memo } from 'react';

import DefaultAvatar from './assets/default-avatar.svg';
import { styledAvatar } from './styles';
import type { AvatarProps } from './types';

const Avatar = (props: AvatarProps) => {
    return (
        <span className={styledAvatar(props)} />
    );
};

Avatar.defaultProps = {
    medium: true,
    margin: '0px',
    src: DefaultAvatar
};

export default memo(Avatar);