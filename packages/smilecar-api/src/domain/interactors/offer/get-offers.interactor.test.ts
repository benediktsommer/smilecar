import DIContainer from '../../../DI/inversify.config';
import Dependencies from '../../../DI/dependencies';

import { GetOffersInteractor } from './get-offers.interactor';
import { OfferService } from '../../services/offer.service';

const mockedLogger = jest.fn();
jest.mock('../../../utils/Logger', () => ({
  log: {
    error: (...args) => mockedLogger(`ERROR: ${args}`),
  },
}));

describe('Get-Offers.Interactor', () => {
  let interactor: GetOffersInteractor;

  //region mock initialization
  const getOfferListSpy = jest.fn();
  const MockedOfferService = jest.fn<OfferService, []>(() => ({
    getOfferList: getOfferListSpy,
  }));
  //endregion

  //region initial lifecycle
  beforeEach(() => {
    mockedLogger.mockReset();
    getOfferListSpy.mockReset();

    DIContainer.rebind(Dependencies.OfferService).toConstantValue(new MockedOfferService());
    interactor = DIContainer.get<GetOffersInteractor>(Dependencies.OfferInteractor);
  });
  //endregion

  describe('when the interactor is called', () => {
    describe('and the service return some offer information', () => {
      beforeEach(() => {
        getOfferListSpy.mockResolvedValue([
          {
            vehicle: {
              category: 'MINI',
              name: 'Fiat Panda',
              imageUrl:
                'https://vehicle-images.carrentalgateway.com/small/54ecd83e-a02c-4582-bd87-cf822ff71abc-izmo.png',
              acrissCode: 'MBMN',
              gearType: 'manual',
              bags: {
                min: 2,
                max: null,
              },
              seats: 4,
              doors: 2,
              hasAC: false,
            },
          },
          {
            vehicle: {
              category: 'ECONOMY',
              name: 'Skoda Fabia',
              imageUrl:
                'https://vehicle-images.carrentalgateway.com/small/2310ae3b-773d-4e1b-9107-8f58ca4dffe8-izmo.png',
              acrissCode: 'ECMR',
              gearType: 'manual',
              bags: {
                min: 1,
                max: 1,
              },
              seats: 4,
              doors: 2,
              hasAC: true,
            },
          },
        ]);
      });

      it('should return the received offers and all available filters', async () => {
        await expect(interactor.interact()).resolves.toEqual({
          offers: [
            {
              vehicle: {
                category: 'MINI',
                name: 'Fiat Panda',
                imageUrl:
                  'https://vehicle-images.carrentalgateway.com/small/54ecd83e-a02c-4582-bd87-cf822ff71abc-izmo.png',
                acrissCode: 'MBMN',
                gearType: 'manual',
                bags: { min: 2, max: null },
                seats: 4,
                doors: 2,
                hasAC: false,
              },
            },
            {
              vehicle: {
                category: 'ECONOMY',
                name: 'Skoda Fabia',
                imageUrl:
                  'https://vehicle-images.carrentalgateway.com/small/2310ae3b-773d-4e1b-9107-8f58ca4dffe8-izmo.png',
                acrissCode: 'ECMR',
                gearType: 'manual',
                bags: { min: 1, max: 1 },
                seats: 4,
                doors: 2,
                hasAC: true,
              },
            },
          ],
          availableFilter: { seats: [4], doors: [2], category: ['MINI', 'ECONOMY'], gearType: ['manual'] },
        });
      });
    });

    describe('and the service return an error', () => {
      beforeEach(() => {
        getOfferListSpy.mockRejectedValue(new Error('Response Error'));
      });

      it('should return the received offers and all available filters', async () => {
        interactor
          .interact()
          .then(() => {
            expect(true).toBeFalsy();
          })
          .finally(() => {
            expect(mockedLogger).toHaveBeenCalledWith('ERROR: No offers available. Reason: Response Error');
          });
      });
    });
  });
});
