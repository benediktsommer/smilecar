import { render } from '@testing-library/react';

import { Body } from './Body';

describe('Test <Body />', () => {
  it('should render an html markup', () => {
    const { asFragment } = render(
      <Body>
        <div>Test</div>
      </Body>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
