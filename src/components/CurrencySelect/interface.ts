import { ICurrencyQuotes } from '@/types/currency';

export interface ICustomSelect {
  options: ICurrencyQuotes[];
  value: string | null;
  onChange: (value: string) => void;
}
