import { Fragment, memo, ReactNode, useCallback } from 'react';
import { Box, Button, withStyles } from '@material-ui/core';

import { FilterTypes } from '../../../interfaces/filter.interface';
import { useGetFilter } from '../../../hooks/useGetFilter';
import { useOfferListDispatch } from '../../Screens/OfferOverview/context';
import { OfferListActionTypes } from '../../Screens/OfferOverview/action';
import { useGetAvailableFilter } from '../../../hooks/useGetAvailableFilter';

import { FilterWidget } from './FilterWidget';
import { useFilterState } from './context';

const FilterWrapper = withStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 2, 0, 0),
    },
  },
}))(Box);

const ResetFilterCTA = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(2, 0),
    },
  },
}))(Button);

export const Filter = memo(() => {
  const { addFilter, deleteFilter, filter } = useFilterState();
  const { filter: originalFilter } = useGetFilter();
  const { availableFilter } = useGetAvailableFilter();

  if (!originalFilter || !availableFilter) {
    return null;
  }

  return (
    <FilterWrapper>
      {Object.keys(originalFilter).map((option) => {
        const filterOption = originalFilter[option as FilterTypes] || [];
        if (!filterOption) {
          return null;
        }

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
      <ResetFilterCTA
        variant="contained"
        color="primary"
        size="large"
        type="submit"
        onClick={deleteFilter}
      >
        Filter zurücksetzen
      </ResetFilterCTA>
    </FilterWrapper>
  );
});
