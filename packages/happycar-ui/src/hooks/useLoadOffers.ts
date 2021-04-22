import { useEffect } from 'react';
import { useQuery } from 'react-query';

import { offerAdapter } from '../adapter/offerAdapter';
import { useOfferListDispatch } from '../components/Screens/OfferOverview/context';
import { OfferListActionTypes } from '../components/Screens/OfferOverview/action';

export const useLoadOffers = () => {
  const { dispatch } = useOfferListDispatch();
  const { data, isLoading, isError, error } = useQuery(['offers'], () =>
    offerAdapter()
  );

  useEffect(() => {
    if (isLoading) {
      dispatch({
        type: OfferListActionTypes.OFFERLIST_LOAD_START,
      });

      return;
    }

    if (!data) {
      dispatch({
        type: OfferListActionTypes.OFFERLIST_LOAD_FAILED,
        error: 'Applicationlist data is missing',
      });

      return;
    }

    console.log(data.filter);
    dispatch({
      type: OfferListActionTypes.OFFERLIST_LOAD_SUCCESSFUL,
      offers: data.offers,
      filter: data.filter,
    });
  }, [dispatch, isLoading, data]);

  useEffect(() => {
    if (!error) {
      return;
    }

    dispatch({
      type: OfferListActionTypes.OFFERLIST_LOAD_FAILED,
      error: error instanceof Error ? error.message : `${error}`,
    });
  }, [isError, error, dispatch]);
};
