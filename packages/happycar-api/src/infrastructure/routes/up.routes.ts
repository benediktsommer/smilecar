import { Application, Router } from 'express';
import { inject, injectable } from 'inversify';

import { UpController } from '../../controller/up.controller';
import Dependencies from '../../DI/dependencies';

import { IBaseRoute } from './base.route';

@injectable()
export class UpRoutes implements IBaseRoute {
  private readonly urlPrefix = '/up';

  private readonly upController: UpController;

  constructor(@inject(Dependencies.UpController) upController: UpController) {
    this.upController = upController;
  }

  register(app: Application): void {
    const router = Router();

    router.route('/').get(this.upController.execute);

    app.use(this.urlPrefix, router);
  }
}
