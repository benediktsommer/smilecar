import { render } from '@testing-library/react';

import { LanguageSelector } from './';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, fallback: string) => fallback,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe('Test <LanguageSelector />', () => {
  it('should render an html markup', () => {
    const { asFragment } = render(<LanguageSelector />);
    expect(asFragment()).toMatchSnapshot();
  });
});
