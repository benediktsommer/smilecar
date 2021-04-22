import { useOfferListState } from '../components/Screens/OfferOverview/context';
import { IOffer } from '../interfaces/offer.interface';
import { useFilterState } from '../components/OfferOverview/Filter/context';
import { FilterTypes } from '../interfaces/filter.interface';

export const useGetFilteredOffers = (): { offers: IOffer[] } => {
  const { offerList } = useOfferListState();
  const {
    filter: { selected: selectedFilter },
  } = useFilterState();

  if (offerList.isLoading || !offerList.offers) {
    return { offers: [] };
  }

  const checkOfferAttributesAgainstFilter = (offer: IOffer): boolean => {
    let offerAvailable = true;
    for (const selectedFilterKey in selectedFilter) {
      const vehicleFilteredOptionValue =
        offer.vehicle[selectedFilterKey as FilterTypes];

      if (
        !selectedFilter[selectedFilterKey as FilterTypes]?.includes(
          vehicleFilteredOptionValue
        )
      ) {
        offerAvailable = false;
      }
    }

    return offerAvailable;
  };

  const newOfferList: IOffer[] = [];
  offerList.offers.forEach((offer) => {
    if (checkOfferAttributesAgainstFilter(offer)) {
      newOfferList.push(offer);
    }
  });

  return {
    offers: newOfferList.length > 0 ? newOfferList : offerList.offers,
  };
};
