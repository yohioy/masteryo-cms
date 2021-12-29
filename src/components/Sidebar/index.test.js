import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, screen, render } from '@testing-library/react';

import Sidebar from './';
import Dashboard from '@material-ui/icons/Dashboard';
import ArrowRight from '@material-ui/icons/ArrowRight';

let routes;

beforeAll(() => {
  routes = [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: Dashboard,
      subRoutes: [
        {
          path: '/dashboard',
          name: 'View Dashboard',
          icon: ArrowRight
        }
      ]
    }
  ];
});

afterEach(cleanup);

describe('Sidebar', () => {
  it('has correct element', () => {

    const { container } = render(<Sidebar routes={routes} logoText="mylogo" />);

    const element = screen.getAllByTestId('menu-dashboard')[0];
    expect(container).toMatchSnapshot();
    expect(element).toBeTruthy();
    expect(element).toHaveTextContent('Dashboard');
  });

  it('has correct brand', () => {

    const { container } = render(<Sidebar routes={routes} logoText="mylogo" />);
    const element = screen.getAllByTestId('brand')[0];

    expect(container).toMatchSnapshot();
    expect(element).toBeTruthy();
    expect(element).toHaveTextContent('mylogo');
  });
});

import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { render, fireEvent, waitFor, act, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


import Sidebar from './index';
import CustomListItem from "./CustomListItem";
import dashboardRoutes from "routes.js";

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('<Sidebar />', () => {
    let routes;

    beforeEach(() => {
        routes = dashboardRoutes;

    });

    it('has one <Drawer /> components', async () => {
        const mount = createMount({mount:render})

        await act(async () => {
            mount(<Sidebar routes={routes} />);
        });
        expect(await screen.findAllByRole('hidden-drawer-element')).toHaveLength(1);
    });

    it('has one <List /> component ', () => {
        const { getAllByTestId } = render(<Sidebar routes={routes} />);
        expect(getAllByTestId('list')).toBeTruthy();
    });

    it('has one <CustomListItem /> component', () => {
        const wrapper = shallow(<Sidebar routes={routes} />);
        expect(wrapper.containsMatchingElement(<CustomListItem />)).toEqual(true);
    });
});
