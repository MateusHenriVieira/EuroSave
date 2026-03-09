export type CountryCode = 'DE' | 'ES' | 'FR' | 'IT' | 'NL';

export interface PriceDetail {
  country: CountryCode;
  price: number;
  shipping: number;
  isAvailable: boolean;
  url: string;
}

export interface UserState {
  usageCount: number;
  isPremium: boolean;
  totalSaved: number;
  currency: string;
}