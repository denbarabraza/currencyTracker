import { ICurrencyQuotes } from '@/types/ICurrency';

export const getCurrencBySearch = (searchValue: string, currency: ICurrencyQuotes[]) => {
  const hintsData = [];

  for (let i = 0; i < currency.length; i++) {
    if (
      currency[i].name.toLowerCase().includes(searchValue.toLowerCase()) ||
      currency[i].code.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      hintsData.push(currency[i]);
    }
  }

  return hintsData;
};
