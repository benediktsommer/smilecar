import { render } from '@testing-library/react';

import { HappyLogo } from './HappyLogo';

describe('Test <HappyLogo />', () => {
  it('should render an html markup', () => {
    const { asFragment } = render(<HappyLogo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
