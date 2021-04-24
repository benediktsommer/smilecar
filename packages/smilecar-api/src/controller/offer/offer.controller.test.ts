import { getMockRes, getMockReq } from '@jest-mock/express';

import DIContainer from '../../DI/inversify.config';
import Dependencies from '../../DI/dependencies';

import { GetOffersInteractor } from '../../domain/interactors/offer/get-offers.interactor';

import { BaseController } from '../base-controller';
import { OfferController } from './offer.controller';

describe('Offer.Controller', () => {
  let controller: BaseController<OfferController>;
  const interactSpy: jest.Mock = jest.fn();

  const MockedGetOfferInteractor = jest.fn<GetOffersInteractor, []>(() => ({
    interact: interactSpy,
  }));

  beforeEach(() => {
    interactSpy.mockReset();
    DIContainer.rebind(Dependencies.OfferInteractor).toConstantValue(new MockedGetOfferInteractor());
    controller = DIContainer.get<BaseController<OfferController>>(Dependencies.OfferController);
  });

  describe('when the controller is called', () => {
    beforeEach(() => {
      interactSpy.mockResolvedValue({ offers: 'foo', availableFilter: 'bar' });
    });

    it('should return an offer array and filter options', async () => {
      const { res, next } = getMockRes();

      await controller.execute(getMockReq(), res, next);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ offers: 'foo', filter: 'bar' });
    });
  });
});
