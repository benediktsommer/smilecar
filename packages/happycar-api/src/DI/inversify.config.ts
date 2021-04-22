import { Container } from 'inversify';

import { IConfig, getConfig } from '../config';
import Dependencies from './dependencies';
import { IOffer } from '../domain/interfaces/offer.interface';

/* Controller */
import { BaseController } from '../controller/base-controller';
import { UpController } from '../controller/up.controller';
import { OfferController, IResponse as IOfferControllerResponse } from '../controller/offer/offer.controller';

/* Routes */
import { UpRoutes } from '../infrastructure/routes/up.routes';
import { IBaseRoute } from '../infrastructure/routes/base.route';
import { OfferRoutes } from '../infrastructure/routes/offer.routes';

/* Interactor */
import { IBaseInteractor } from '../domain/interactors/base.interactor';
import {
  GetOffersInteractor,
  IResponse as GetOffersInteractorResponse,
} from '../domain/interactors/offer/get-offers.interactor';
import { OfferService } from '../domain/services/offer.service';

/* Service */
import { OfferServiceImpl } from '../services/offer.service';

/* START DI */
const DIContainer = new Container();

/* Config */
DIContainer.bind<IConfig>(Dependencies.Config).toConstantValue(getConfig());

/* Routes */
DIContainer.bind<IBaseRoute>(Dependencies.Routes).to(UpRoutes);
DIContainer.bind<IBaseRoute>(Dependencies.Routes).to(OfferRoutes);

/* Controller */
DIContainer.bind<BaseController<string>>(Dependencies.UpController).to(UpController);
DIContainer.bind<BaseController<IOfferControllerResponse>>(Dependencies.OfferController).to(OfferController);

/* Interactor */
DIContainer.bind<IBaseInteractor<unknown, GetOffersInteractorResponse>>(Dependencies.OfferInteractor).to(
  GetOffersInteractor
);

/* Service */
DIContainer.bind<OfferService>(Dependencies.OfferService).to(OfferServiceImpl);

export default DIContainer;
