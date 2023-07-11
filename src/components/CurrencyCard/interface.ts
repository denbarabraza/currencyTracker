import { ICurrencies } from '@/store/reducers/home/types';
import { ICurrencyQuotes } from '@/types/currency';

export interface ICurrencyCard {
  currencies: ICurrencyQuotes[];
  currencyForValue?: ICurrencies | null;
}
