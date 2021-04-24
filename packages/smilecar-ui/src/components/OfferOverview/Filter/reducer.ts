import { FilterTypes, IFilter } from '../../../interfaces/filter.interface';
import { clearEmpties } from '../../../utils/object-format';

import { FilterActionTypes, FilterStateActions } from './action';

export interface IFilterState {
  selected: { [key in FilterTypes]?: Array<string | number | boolean> };
}

export const initialFilterState: IFilterState = {
  selected: {},
};

export const filterReducer = (
  state: IFilterState,
  action: FilterStateActions
): IFilterState => {
  switch (action.type) {
    case FilterActionTypes.FILTER_DELETE: {
      return initialFilterState;
    }

    case FilterActionTypes.FILTER_SELECTED: {
      const newState = Object.assign({}, state);

      if (!newState.selected[action.filterType]) {
        newState.selected = {
          ...newState.selected,
          [action.filterType]: [],
        };
      }

      if (newState.selected[action.filterType]?.includes(action.option)) {
        newState.selected[action.filterType] = newState.selected[
          action.filterType
        ]?.filter((option) => option !== action.option);
      } else {
        newState.selected[action.filterType]?.push(action.option);
      }

      return {
        selected: clearEmpties(newState.selected),
      };
    }
  }
};
