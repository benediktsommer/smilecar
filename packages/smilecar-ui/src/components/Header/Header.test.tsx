import { render } from '@testing-library/react';

import { Header } from './';

describe('Test <Header />', () => {
  it('should render an html markup', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
