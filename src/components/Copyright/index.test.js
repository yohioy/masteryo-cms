import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { render, fireEvent, waitFor, act, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


import Copyright from './index';

describe('<Copyright />', () => {

    test('has correct links', () => {
        const { getByTestId } = render(<Copyright />);
        expect(getByTestId('website')).toHaveAttribute('href', 'https://masteryocms.co.uk');
        expect(getByTestId('tech')).toHaveAttribute('href', '/tech');
        expect(getByTestId('about')).toHaveAttribute('href', '/about');

    });

    test('has correct link text', () => {
        const { getByTestId } = render(<Copyright />);
        expect(getByTestId('website')).toHaveTextContent('Your Website');
        expect(getByTestId('tech')).toHaveTextContent('Tech');
        expect(getByTestId('about')).toHaveTextContent('About');
    });

    test('has correct number of links', async () => {
        const mount = createMount({mount:render})

        await act(async () => {
            mount(<Copyright />);
        });
        expect(await screen.findAllByRole('footer-link')).toHaveLength(3)
    });
});
