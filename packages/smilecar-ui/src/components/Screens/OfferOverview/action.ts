import { IOffer } from '../../../interfaces/offer.interface';
import { IFilter } from '../../../interfaces/filter.interface';

export enum OfferListActionTypes {
  OFFERLIST_LOAD_START = 'OFFERLIST_LOAD_START',
  OFFERLIST_LOAD_SUCCESSFUL = 'OFFERLIST_LOAD_SUCCESSFUL',
  OFFERLIST_LOAD_FAILED = 'OFFERLIST_LOAD_FAILED',
  OFFER_FILTERED = 'OFFER_FILTERED',
}

interface IOfferListLoadStart {
  type: OfferListActionTypes.OFFERLIST_LOAD_START;
}

interface IOfferListLoadSuccessful {
  type: OfferListActionTypes.OFFERLIST_LOAD_SUCCESSFUL;
  offers: IOffer[];
  filter: IFilter;
}

interface IOfferListLoadFailed {
  type: OfferListActionTypes.OFFERLIST_LOAD_FAILED;
  error: string;
}

interface IOfferListFiltered {
  type: OfferListActionTypes.OFFER_FILTERED;
  filterIdentifier: keyof IFilter;
  filterOption: string | number;
}

export type OfferListStateActions =
  | IOfferListLoadStart
  | IOfferListLoadSuccessful
  | IOfferListLoadFailed
  | IOfferListFiltered;
