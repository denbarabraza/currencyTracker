import { ICurrencyQuotes } from '@/types/ICurrency';

export interface ICustomSelect {
  options: ICurrencyQuotes[];
  value: string | null;
  onChange: (value: string) => void;
}
