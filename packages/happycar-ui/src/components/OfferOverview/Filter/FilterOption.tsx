import { FunctionComponent, memo, useCallback } from 'react';
import {
  Box,
  createStyles,
  makeStyles,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';

import { IFilter } from '../../../interfaces/filter.interface';

interface IProps {
  identifier: keyof IFilter;
  disabled: boolean;
  value: string | number;
  handleClick(filterType: keyof IFilter, value: string | number): void;
}

const useStyles = makeStyles<Theme, { isDisabled: boolean }>((theme) =>
  createStyles({
    filterOption: {
      cursor: ({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer'),
      border: `1px solid ${theme.palette.grey['600']}`,
      padding: theme.spacing(0, 2),
      margin: theme.spacing(1, 1),
      minWidth: theme.spacing(5),
    },
  })
);

export const FilterOption = memo(
  ({ identifier, disabled, handleClick, value }: IProps) => {
    const { filterOption } = useStyles({ isDisabled: disabled });

    const handleOnClick = useCallback(
      (event: React.MouseEvent) => {
        const filterValue = 0;

        handleClick(identifier, value);
      },
      [handleClick]
    );

    return (
      <Box className={filterOption} onClick={handleOnClick}>
        <p>{value}</p>
      </Box>
    );
  }
);
