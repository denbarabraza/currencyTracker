import { ICurrencies } from '@/store/reducers/currency/types';
import { ICurrencyQuotes } from '@/types/ICurrency';

export interface ICurrencyCard {
  currencies: ICurrencyQuotes[];
  currencyForValue?: ICurrencies | null;
  handleCurrencyClick: (currencyName: string) => void;
}
