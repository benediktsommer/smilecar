import { useOfferListState } from '../components/Screens/OfferOverview/context';
import { IOffer } from '../interfaces/offer.interface';

export const useGetFilteredOffers = (): { offers: IOffer[] } => {
  const { offerList } = useOfferListState();

  if (offerList.isLoading || !offerList.offers) {
    return { offers: [] };
  }

  return {
    offers: offerList.offers.filter((offer) => offer.isActive),
  };
};
