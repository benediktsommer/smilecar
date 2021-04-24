import { render } from '@testing-library/react';

import OfferOverview from './';

jest.mock('../../OfferOverview', () => ({
  OfferOverview: () => <div id="OfferOverview" />,
}));

describe('Test <OfferOverview />', () => {
  it('should render an html markup', () => {
    const { asFragment } = render(<OfferOverview />);
    expect(asFragment()).toMatchSnapshot();
  });
});
