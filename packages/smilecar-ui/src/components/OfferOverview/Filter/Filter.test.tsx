import { renderHook, act } from '@testing-library/react-hooks';
import { render } from '@testing-library/react';

import { Filter } from './';

const mockedFilterValue = jest.fn();
jest.mock('./context', () => ({
  useFilterState: () => ({
    addFilter: () => {
      /* do nothing */
    },
    deleteFilter: () => {
      /* do nothing */
    },
    filter: mockedFilterValue(),
  }),
}));

const mockedOriginalFilter = jest.fn();
jest.mock('../../../hooks/useGetFilter', () => ({
  useGetFilter: () => ({
    filter: mockedOriginalFilter(),
  }),
}));

const mockedAvailableFilter = jest.fn();
jest.mock('../../../hooks/useGetAvailableFilter', () => ({
  useGetAvailableFilter: () => ({
    availableFilter: mockedAvailableFilter(),
  }),
}));

describe('test <Filter />', () => {
  const renderComponent = () => render(<Filter />);

  beforeEach(() => {
    mockedFilterValue.mockReset();
    mockedOriginalFilter.mockReset();
    mockedAvailableFilter.mockReset();
  });

  describe('if the filter options are loaded', () => {
    beforeEach(() => {
      mockedAvailableFilter.mockReturnValue({
        seats: [2, 4, 6],
      });

      mockedOriginalFilter.mockReturnValue({
        seats: [4, 5],
      });

      mockedFilterValue.mockReturnValue({
        selected: {
          seats: [4],
        },
      });
    });

    it('should display the filter option', () => {
      const { asFragment } = renderComponent();
      expect(asFragment()).toMatchSnapshot();
    });
  });

  describe('if the loaded filter options are empty', () => {
    beforeEach(() => {
      mockedAvailableFilter.mockReturnValue(null);

      mockedOriginalFilter.mockReturnValue(null);

      mockedFilterValue.mockReturnValue({});
    });

    it('should display nothing', () => {
      const { asFragment } = renderComponent();
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
