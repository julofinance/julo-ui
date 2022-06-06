import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Typography from '../Typography';

describe('Typography', () => {
  test('renders the Typography component', async () => {
    const { findByText } = render(<Typography>Hello World!</Typography>);

    const txtTesting = await findByText('Hello World!');
    expect(txtTesting).not.toBe(null);
  });
});
