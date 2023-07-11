import { currencyQuotes } from '@/constants/currency';

export const getSelectedCurrency = (currencyTimeLineName: string | null) => {
  return currencyQuotes.filter(currency => currency.name === currencyTimeLineName);
};
