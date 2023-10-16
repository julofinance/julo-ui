import { matchers } from '@emotion/jest';

expect.extend(matchers);

export * from '@testing-library/react';
export * from './focus';
export { render } from './render';
export { testA11y } from './accessibility';
export { default as renderer } from 'react-test-renderer';
