import { inject, injectable } from 'inversify';
import { BaseController } from '../base-controller';
import { IOffer } from '../../domain/interfaces/offer.interface';
import Dependencies from '../../DI/dependencies';
import { GetOffersInteractor } from '../../domain/interactors/offer/get-offers.interactor';

export interface IResponse {
  offers: IOffer[];
  filter: {
    [key in keyof IOffer['vehicle']]?: Array<string | number>;
  };
}

@injectable()
export class OfferController extends BaseController<IResponse> {
  @inject(Dependencies.OfferInteractor) private readonly offerInteractor: GetOffersInteractor;

  public async executeImpl() {
    const offerResponse = await this.offerInteractor.interact();

    return this.ok({
      offers: offerResponse.offers,
      filter: offerResponse.availableFilter,
    });
  }
}
