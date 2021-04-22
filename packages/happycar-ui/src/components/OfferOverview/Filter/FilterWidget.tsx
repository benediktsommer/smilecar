import { memo, ReactNode, useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  useMediaQuery,
  useTheme,
  withStyles,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import { FilterTypes } from '../../../interfaces/filter.interface';

import { FilterOption } from './FilterOption';

interface IProps {
  headline: string;
  handleFilter(filterType: FilterTypes, value: number | string): void;
  filterOptions: {
    identifier: FilterTypes;
    value: string | number;
    disabled: boolean;
  }[];
}

const FilterPannel = withStyles((theme) => ({
  root: {
    width: '100%',
  },
}))(Accordion);

const AccordionContent = withStyles((theme) => ({
  root: {
    flexWrap: 'wrap',
  },
}))(AccordionDetails);

export const FilterWidget = memo(
  ({ headline, filterOptions, handleFilter }: IProps) => {
    const theme = useTheme();
    const [open, setOpen] = useState<boolean>(false);

    const breakpointIsGreaterThenTabled = useMediaQuery(
      theme.breakpoints.up('md')
    );

    useEffect(() => {
      if (breakpointIsGreaterThenTabled) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    }, [breakpointIsGreaterThenTabled]);

    return (
      <FilterPannel expanded={open} onChange={() => setOpen(!open)}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="body1">{headline}</Typography>
        </AccordionSummary>
        <AccordionContent>
          {filterOptions.map((option, index) => (
            <FilterOption
              identifier={option.identifier}
              disabled={option.disabled}
              handleClick={handleFilter}
              value={option.value}
              key={String(index)}
            />
          ))}
        </AccordionContent>
      </FilterPannel>
    );
  }
);
