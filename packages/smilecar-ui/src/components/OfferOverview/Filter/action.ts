import { FilterTypes } from '../../../interfaces/filter.interface';

export enum FilterActionTypes {
  FILTER_SELECTED = 'FILTER_SELECTED',
  FILTER_DELETE = 'FILTER_DELETE',
}

interface IFilterSelected {
  type: FilterActionTypes.FILTER_SELECTED;
  filterType: FilterTypes;
  option: string | number;
}

interface IFilterDeleted {
  type: FilterActionTypes.FILTER_DELETE;
}

export type FilterStateActions = IFilterSelected | IFilterDeleted;
