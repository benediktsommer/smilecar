import { render } from '@testing-library/react';

import { StarRating } from './';

describe('Test <StarRating />', () => {
  it('should render an html markup', () => {
    const { asFragment } = render(
      <StarRating rating={{ average: 0.68, count: 3 }} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
