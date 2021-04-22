import { injectable } from 'inversify';

import { OfferService } from '../domain/services/offer.service';
import {
  CurrencyCode,
  FuelPolicyType,
  GearType,
  IOffer,
  RateTypes,
  Suppliers,
} from '../domain/interfaces/offer.interface';

import OfferMock from '../mocks/offers.json';

@injectable()
export class OfferServiceImpl extends OfferService {
  getOfferList(): Promise<IOffer[]> {
    // load and return the mock
    return Promise.resolve(
      OfferMock.map((offer) => ({
        bookingFormUrl: offer.bookingFormUrl,
        rateType: offer.rateType as RateTypes,
        fuelPolicy: offer.fuelPolicy as FuelPolicyType,
        vehicle: {
          category: offer.vehicle.category,
          name: offer.vehicle.name,
          imageUrl: offer.vehicle.imageUrl,
          acrissCode: offer.vehicle.acrissCode,
          gearType: offer.vehicle.gearType as GearType,
          bags: {
            min: offer.vehicle.bags.min || 0,
            max: offer.vehicle.bags.max || 0,
          },
          seats: offer.vehicle.seats,
          doors: offer.vehicle.doors,
          hasAC: offer.vehicle.hasAC,
        },
        supplier: {
          name: offer.supplier.name as Suppliers,
          rawName: offer.supplier.rawName,
          logoUrl: offer.supplier.logoUrl,
          rating: {
            average: offer.supplier.rating?.average || 0,
            count: offer.supplier.rating?.count || 0,
          },
        },
        hasSanitationGuarantee: offer.hasSanitationGuarantee,
        price: {
          currencyCode: offer.price.currencyCode as CurrencyCode,
          value: offer.price.value,
          taxPercentage: offer.price.taxPercentage || 0,
          payAt: offer.price.payAt,
        },
      }))
    );
  }
}
