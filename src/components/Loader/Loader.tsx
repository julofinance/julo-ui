import React, { memo } from 'react';

import { styledLoader } from './styles';
import type { LoaderProps } from './types';

const Loader = (props: LoaderProps) => {
    const {
        'data-testid': dataTestId,
        ...otherProps
    } = props
    return (
        <span
            className={styledLoader(otherProps)}
            data-testid={dataTestId}
        />
    );
};

Loader.defaultProps = {
    dark: 'false',
    size: '50px'
};

export default memo(Loader);