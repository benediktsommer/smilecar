import { GearType, IOffer } from './offer.interface';

export type FilterTypes = keyof IOffer['vehicle'];

export type IFilter = {
  [key in FilterTypes]?: Array<string | number | boolean>;
};
