import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen, render } from '@testing-library/react';

import Dashboard from './';
afterEach(cleanup);

test('has h1 title', () => {
  render(<Dashboard />);

  expect(screen.getByTestId('dashboard-header')).toBeTruthy();
  expect(screen.getByTestId('dashboard-header')).toHaveTextContent('MyShop Dashboard');
});
