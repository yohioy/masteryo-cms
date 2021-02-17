import React from 'react';
import { createMount } from '@material-ui/core/test-utils';
import { render, fireEvent, waitFor, act, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


import BrandLogoContainer from './BrandLogoContainer';

describe('<BrandLogoContainer />', () => {

    it('has the logo image item', () => {
        const { getByTestId } = render(<BrandLogoContainer />);
        expect(getByTestId('logo-image')).toBeTruthy();
        expect(getByTestId('logo-icon')).toBeTruthy();
    });

    it('has the logo text item', () => {
        const { getByTestId  } = render(<BrandLogoContainer />);
        expect(getByTestId('logo-text')).toBeTruthy();
    });

    it('has two <Grid /> components', async () => {
        const mount = createMount({mount:render})

        await act(async () => {
            mount(<BrandLogoContainer />);
        });
        expect(await screen.findAllByRole('logo-item')).toHaveLength(2);
    });
});