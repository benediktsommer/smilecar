import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { RouteSwitch } from './';

describe('Test <RouteSwitch />', () => {
  it('should render an html markup', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <RouteSwitch />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
