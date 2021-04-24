import { IOffer } from '../../../interfaces/offer.interface';
import { IFilter } from '../../../interfaces/filter.interface';

import { OfferListActionTypes, OfferListStateActions } from './action';

interface ILoadingOfferState {
  isLoading: true;
  error: null;
  offers: null;
  filter: null;
}

interface IErroredOfferState {
  isLoading: false;
  error: string;
  offers: null;
  filter: null;
}

interface ILoadedOfferState {
  isLoading: false;
  error: null;
  offers: IOffer[];
  filter: IFilter;
}

export type IOfferState =
  | ILoadingOfferState
  | IErroredOfferState
  | ILoadedOfferState;

export const initialOfferState: IOfferState = {
  error: null,
  isLoading: true,
  offers: null,
  filter: null,
};

export const offerReducer = (
  state: IOfferState,
  action: OfferListStateActions
): IOfferState => {
  switch (action.type) {
    case OfferListActionTypes.OFFERLIST_LOAD_SUCCESSFUL: {
      return {
        ...state,
        error: null,
        isLoading: false,
        offers: action.offers.map((offer) => ({
          ...offer,
          isActive: true,
        })),
        filter: action.filter,
      };
    }

    case OfferListActionTypes.OFFERLIST_LOAD_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
        offers: null,
        filter: null,
      };
    }

    case OfferListActionTypes.OFFERLIST_LOAD_START: {
      return {
        ...state,
        isLoading: true,
        error: null,
        offers: null,
        filter: null,
      };
    }

    case OfferListActionTypes.OFFER_FILTERED: {
      if (!state.offers) {
        return state;
      }

      return {
        ...state,
        offers: state.offers.map((offer) => {
          if (
            offer.vehicle[action.filterIdentifier] &&
            offer.vehicle[action.filterIdentifier] === action.filterOption
          ) {
            return {
              ...offer,
              isActive: true,
            };
          }

          return {
            ...offer,
            isActive: false,
          };
        }),
      };
    }

    default: {
      return state;
    }
  }
};
