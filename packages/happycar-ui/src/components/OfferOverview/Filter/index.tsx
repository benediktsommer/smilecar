import { Fragment, memo, ReactNode, useCallback } from 'react';
import { Box } from '@material-ui/core';

import { FilterTypes } from '../../../interfaces/filter.interface';
import { useGetFilter } from '../../../hooks/useGetFilter';
import { useOfferListDispatch } from '../../Screens/OfferOverview/context';
import { OfferListActionTypes } from '../../Screens/OfferOverview/action';

import { FilterWidget } from './FilterWidget';

export const Filter = memo(() => {
  const { dispatch } = useOfferListDispatch();
  const { filter } = useGetFilter();

  const handleFilter = useCallback(
    (filterType: FilterTypes, value: number | string): void => {
      dispatch({
        type: OfferListActionTypes.OFFER_FILTERED,
        filterIdentifier: filterType,
        filterOption: value,
      });
    },
    [dispatch]
  );

  if (!filter) {
    return null;
  }

  return (
    <Box mt={4} mr={2}>
      {Object.keys(filter).map((option) => {
        /* some strage TS behaviors */
        const filterOption = filter[option as FilterTypes];
        if (!filterOption) {
          return null;
        }
        /* end strange behavior */

        return (
          <Fragment key={option}>
            <FilterWidget
              headline={option.toUpperCase()}
              handleFilter={handleFilter}
              filterOptions={filterOption.map((value) => ({
                identifier: option as FilterTypes,
                disabled: false,
                value,
              }))}
            />
          </Fragment>
        );
      })}
    </Box>
  );
});
