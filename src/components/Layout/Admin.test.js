import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen, render, fireEvent } from '@testing-library/react';

import Admin from './Admin';

afterEach(cleanup);

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: ''
    };
  }
}));

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
});

afterEach(() => {
  console.error.mockClear();
});

describe('Admin Layout', () => {
  it('has dashboard', async () => {
    const { container } = render(<Admin children="" />);

    const element = screen.getAllByTestId('menu-dashboard')[0];
    expect(element).toBeTruthy();
    expect(element).toHaveTextContent('Dashboard');
  });

  it('has products', async () => {
    const { container } = render(<Admin children="" />);

    const element = screen.getAllByTestId('menu-products')[0];
    expect(element).toBeTruthy();
    expect(element).toHaveTextContent('Products');
  });

  it('has shop', async () => {
    const { container } = render(<Admin children="" />);

    const element = screen.getAllByTestId('menu-shop')[0];
    expect(element).toBeTruthy();
    expect(element).toHaveTextContent('Shop');
  });

  it('has shipping', async () => {
    const { container } = render(<Admin children="" />);

    const element = screen.getAllByTestId('menu-shop')[0];
    fireEvent.click(element);
    const subelement = screen.getByTestId('submenu-shipping');

    expect(subelement).toBeTruthy();
    expect(subelement).toHaveTextContent('Shipping');
  });

  it('has coupons', async () => {
    const { container } = render(<Admin children="" />);

    const element = screen.getAllByTestId('menu-shop')[0];
    fireEvent.click(element);
    const subelement = screen.getByTestId('submenu-coupons');

    expect(subelement).toBeTruthy();
    expect(subelement).toHaveTextContent('Coupons');
    //expect(container).toMatchSnapshot();
  });

})

