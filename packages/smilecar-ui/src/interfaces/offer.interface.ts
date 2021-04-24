export type RateTypes = 'BASIC' | 'EXCELLENT';
export type FuelPolicyType = 'f2f';
export type GearType = 'manual' | 'automatic';
export type CurrencyCode = 'EUR';

export enum Suppliers {
  Interrent = 'Interrent',
  Enterprise = 'Enterprise',
  GlobalDrive = 'Global Drive',
  KeddyEuropcar = 'Keddy by Europcar',
}

export interface IOffer {
  isActive: boolean;
  bookingFormUrl: string;
  rateType: RateTypes;
  fuelPolicy: FuelPolicyType;
  vehicle: {
    category: string;
    name: string;
    imageUrl: string;
    acrissCode: string;
    gearType: string;
    bags: number;
    seats: number;
    doors: number;
    hasAC: boolean;
  };
  supplier: {
    name: Suppliers;
    rawName: string;
    logoUrl: string;
    rating: {
      average: number;
      count: number;
    };
  };
  hasSanitationGuarantee: boolean;
  price: {
    currencyCode: CurrencyCode;
    value: number;
    taxPercentage: number;
    payAt: string;
  };
}
