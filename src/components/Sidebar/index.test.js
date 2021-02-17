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