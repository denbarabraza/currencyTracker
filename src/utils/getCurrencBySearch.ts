import { ICurrencyQuotes } from '@/types/currency';

export const getCurrencBySearch = (searchValue: string, currency: ICurrencyQuotes[]) => {
  return currency.filter(currencyItem => {
    const lowerCaseSearchValue = searchValue.toLowerCase();
    const lowerCaseName = currencyItem.name.toLowerCase();
    const lowerCaseCode = currencyItem.code.toLowerCase();

    return (
      lowerCaseName.includes(lowerCaseSearchValue) ||
      lowerCaseCode.includes(lowerCaseSearchValue)
    );
  });
};
