import { render } from '@testing-library/react';

import { MainTheme } from './MainTheme';

describe('Test <MainTheme />', () => {
  it('should render an html markup', () => {
    const { asFragment } = render(
      <MainTheme>
        <div>Test</div>
      </MainTheme>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
