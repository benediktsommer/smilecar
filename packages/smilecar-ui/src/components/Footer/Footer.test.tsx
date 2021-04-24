import { render } from '@testing-library/react';

import { Footer } from './';

describe('Test <Footer />', () => {
  it('should render an html markup', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
