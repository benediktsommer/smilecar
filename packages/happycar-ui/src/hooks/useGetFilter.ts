import { useOfferListState } from '../components/Screens/OfferOverview/context';
import { IFilter } from '../interfaces/filter.interface';

export const useGetFilter = (): { filter: IFilter | null } => {
  const { offerList } = useOfferListState();

  if (
    offerList.isLoading ||
    Object.keys(offerList?.filter || {}).length === 0
  ) {
    return { filter: null };
  }

  return {
    filter: offerList.filter,
  };
};
