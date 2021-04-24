import { render } from '@testing-library/react';

import NotFound from './';

describe('Test <NotFound />', () => {
  it('should render an html markup', () => {
    const { asFragment } = render(<NotFound />);
    expect(asFragment()).toMatchSnapshot();
  });
});
