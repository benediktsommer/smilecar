import { Application, Router } from 'express';
import { inject, injectable } from 'inversify';
import { IBaseRoute } from './base.route';
import Dependencies from '../../DI/dependencies';
import { OfferController } from '../../controller/offer/offer.controller';

@injectable()
export class OfferRoutes implements IBaseRoute {
  private readonly urlPrefix = '/api/v1/offers';

  @inject(Dependencies.OfferController)
  private readonly offersController: OfferController;

  register(app: Application): void {
    const router = Router();

    router.route('/').get(this.offersController.execute);

    app.use(this.urlPrefix, router);
  }
}
