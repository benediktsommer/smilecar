import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  memo,
  useCallback,
} from 'react';

import { FilterTypes } from '../../../interfaces/filter.interface';

import { FilterActionTypes, FilterStateActions } from './action';
import { filterReducer, IFilterState, initialFilterState } from './reducer';

const throwMissingProvider = () => {
  throw new Error('Filterprovider is missing');
};

interface IOfferStateContextType {
  filter: IFilterState;
  addFilter(filterType: FilterTypes, option: string | number): void;
  deleteFilter(): void;
}

interface IFilterDispatchContextType {
  dispatch: React.Dispatch<FilterStateActions>;
}

const FilterStateContext = createContext<IOfferStateContextType>({
  filter: initialFilterState,
  addFilter: throwMissingProvider,
  deleteFilter: throwMissingProvider,
});

export const FilterProvider = memo(({ children }) => {
  const [filter, dispatch] = useReducer(filterReducer, initialFilterState);

  const addFilter = useCallback(
    (filterType: FilterTypes, option: string | number) => {
      dispatch({
        type: FilterActionTypes.FILTER_SELECTED,
        filterType,
        option,
      });
    },
    [dispatch]
  );

  const deleteFilter = useCallback(() => {
    dispatch({
      type: FilterActionTypes.FILTER_DELETE,
    });
  }, [dispatch]);

  return (
    <FilterStateContext.Provider value={{ addFilter, deleteFilter, filter }}>
      {children}
    </FilterStateContext.Provider>
  );
});

export const useFilterState = () => useContext(FilterStateContext);
