import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';

import RegularButton from './Button';

afterEach(cleanup);

test('has correct links', () => {
    const { container, getByText, queryByTestId, getByTestId } = render(<RegularButton />);

    expect(getByTestId('button-component')).toBeTruthy();
    expect(container).toMatchSnapshot();
});
