import { Fragment, memo, ReactNode, useCallback } from 'react';
import { Box } from '@material-ui/core';

import { FilterTypes } from '../../../interfaces/filter.interface';
import { useGetFilter } from '../../../hooks/useGetFilter';
import { useOfferListDispatch } from '../../Screens/OfferOverview/context';
import { OfferListActionTypes } from '../../Screens/OfferOverview/action';
import { useGetAvailableFilter } from '../../../hooks/useGetAvailableFilter';

import { FilterWidget } from './FilterWidget';
import { useFilterState } from './context';

export const Filter = memo(() => {
  const { addFilter, filter } = useFilterState();
  const { filter: originalFilter } = useGetFilter();
  const { availableFilter } = useGetAvailableFilter();

  if (!originalFilter || !availableFilter) {
    return null;
  }

  return (
    <Box mt={4} mr={2}>
      {Object.keys(originalFilter).map((option) => {
        /* some strage TS behaviors */
        const filterOption = originalFilter[option as FilterTypes];
        if (!filterOption) {
          return null;
        }
        /* end strange behavior */

        return (
          <Fragment key={option}>
            <FilterWidget
              headline={option.toUpperCase()}
              handleFilter={addFilter}
              filterOptions={filterOption.map((value) => ({
                identifier: option as FilterTypes,
                disabled: !availableFilter[option as FilterTypes]?.includes(
                  value
                ),
                active:
                  filter.selected[option as FilterTypes]?.includes(value) ||
                  false,
                value,
              }))}
            />
          </Fragment>
        );
      })}
    </Box>
  );
});
