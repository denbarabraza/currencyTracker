import { currencyQuotes } from '@/constants/currency';
import { ICurrencyQuotes } from '@/types/currency';

export const filteredCurrency = (currentCurrency: ICurrencyQuotes) => {
  return currencyQuotes.filter(currency => currency.name !== currentCurrency.name);
};
