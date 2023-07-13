import { ICurrencyQuotes } from '@/types/currency';

export const enum selectEnum {
  Day = 'day',
  Currency = 'currency',
}

export interface ICustomSelect {
  type: selectEnum;
  options?: ICurrencyQuotes[];
  value?: string | null;
  onChange?: (value: string) => void;
}
