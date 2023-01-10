import React, { memo } from 'react';

import { styledLoader } from './styles';
import type { LoaderProps } from './types';

const Loader = (props: LoaderProps) => {
    return (
        <span className={styledLoader(props)} />
    );
};

Loader.defaultProps = {
    theme: 'Dark',
    size: '156px',
};

export default memo(Loader);