import { currencyQuotes } from '@/constants/currency';

export const getCodeCurrency = (currency: string | null) => {
  if (currency) {
    return currencyQuotes.find(cur => cur.name === currency)?.code;
  }

  return null;
};
