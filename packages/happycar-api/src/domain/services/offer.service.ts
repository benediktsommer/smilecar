import { injectable } from 'inversify';
import { IOffer } from '../interfaces/offer.interface';

@injectable()
export abstract class OfferService {
  abstract getOfferList(): Promise<IOffer[]>;
}
