import { inject, injectable } from 'inversify';

import { IOffer } from '../../interfaces/offer.interface';
import { IBaseInteractor } from '../base.interactor';

import MockedOffers from '../../../mocks/offers.json';
import Dependencies from '../../../DI/dependencies';
import { OfferService } from '../../services/offer.service';
import { IConfig } from '../../../config';

export interface IResponse {
  offers: IOffer[];
  availableFilter: {
    [key in keyof IOffer['vehicle']]?: Array<string | number>;
  };
}

@injectable()
export class GetOffersInteractor implements IBaseInteractor<unknown, IResponse> {
  @inject(Dependencies.OfferService) private readonly offerService: OfferService;
  @inject(Dependencies.Config) private readonly config: IConfig;

  async interact(): Promise<IResponse> {
    const availableOffers = await this.offerService.getOfferList();

    return {
      offers: availableOffers,
      availableFilter: this.searchForFilterOptions(availableOffers),
    };
  }

  private searchForFilterOptions(
    availableOffers: IOffer[]
  ): { [key in keyof IOffer['vehicle']]?: Array<string | number> } {
    let filterOptions = {};

    availableOffers.forEach((offer) => {
      this.config.filterOptions.forEach((option) => {
        const filterValue = this.getFilterableValueFromOffer(offer, option);

        if (!filterOptions[option] && filterValue) {
          filterOptions = {
            ...filterOptions,
            [option]: [filterValue],
          };
        }

        if (!filterOptions[option].includes(filterValue)) {
          filterOptions[option].push(filterValue);
        }
      });
    });

    return filterOptions;
  }

  private getFilterableValueFromOffer(offer: IOffer, filterOption: string): string | number | undefined {
    if (offer.vehicle.hasOwnProperty(filterOption)) {
      return offer.vehicle[filterOption];
    }
  }
}
