import { useOfferListState } from '../components/Screens/OfferOverview/context';
import { FilterTypes, IFilter } from '../interfaces/filter.interface';

import { useGetFilteredOffers } from './useGetFilteredOffers';

export const useGetAvailableFilter = (): {
  availableFilter: IFilter | null;
} => {
  const {
    offerList: { isLoading, filter },
  } = useOfferListState();
  const { offers } = useGetFilteredOffers();

  if (isLoading || Object.keys(filter || {}).length === 0) {
    return { availableFilter: null };
  }

  let availableFilters: IFilter = {};

  for (const filterKey in filter) {
    offers.forEach((offer) => {
      const indexOfAvailableOption = (
        filter[filterKey as FilterTypes] || []
      ).indexOf(offer.vehicle[filterKey as FilterTypes]);

      const filterOptions = availableFilters[filterKey as FilterTypes] || [];
      if (
        indexOfAvailableOption !== -1 &&
        !filterOptions.includes(offer.vehicle[filterKey as FilterTypes])
      ) {
        availableFilters = {
          ...availableFilters,
          [filterKey]: [
            ...filterOptions,
            offer.vehicle[filterKey as FilterTypes],
          ],
        };
      }
    });
  }

  return {
    availableFilter: availableFilters,
  };
};
