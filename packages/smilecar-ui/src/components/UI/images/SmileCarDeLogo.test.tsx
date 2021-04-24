import { render } from '@testing-library/react';

import { SmileCarDeLogo } from './SmileCarDeLogo';

describe('Test <SmileCarDeLogo />', () => {
  it('should render an html markup', () => {
    const { asFragment } = render(<SmileCarDeLogo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
