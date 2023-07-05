import australianDollarIcon from '@/assets/image/australianDollarIcon.svg';
import canadianDollarIcon from '@/assets/image/canadianDollarIcon.svg';
import pesoArgentinoIcon from '@/assets/image/pesoArgentinoIcon.svg';
import { ICurrencyQuotes } from '@/types/currency';
import { getCurrencyBySearch } from '@/utils/getCurrencyBySearch';

describe('getCurrencyBySearch', () => {
  const currencyQuotes: ICurrencyQuotes[] = [
    {
      symbol: 'AR$',
      name: 'Argentine Peso',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'ARS',
      name_plural: 'Argentine pesos',
      img: pesoArgentinoIcon,
    },
    {
      symbol: 'AU$',
      name: 'Australian Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'AUD',
      name_plural: 'Australian dollars',
      img: australianDollarIcon,
    },
    {
      symbol: 'CA$',
      name: 'Canadian Dollar',
      symbol_native: '$',
      decimal_digits: 2,
      rounding: 0,
      code: 'CAD',
      name_plural: 'Canadian dollars',
      img: canadianDollarIcon,
    },
  ];

  test('returns empty array for no matches', () => {
    const result = getCurrencyBySearch('JPY', currencyQuotes);

    expect(result).toEqual([]);
  });

  test('returns matching currencies for partial name match', () => {
    const result = getCurrencyBySearch('pe', currencyQuotes);

    expect(result).toEqual([
      {
        symbol: 'AR$',
        name: 'Argentine Peso',
        symbol_native: '$',
        decimal_digits: 2,
        rounding: 0,
        code: 'ARS',
        name_plural: 'Argentine pesos',
        img: pesoArgentinoIcon,
      },
    ]);
  });

  test('returns matching currencies for case-insensitive search value', () => {
    const result = getCurrencyBySearch('do', currencyQuotes);

    expect(result).toEqual([
      {
        symbol: 'AU$',
        name: 'Australian Dollar',
        symbol_native: '$',
        decimal_digits: 2,
        rounding: 0,
        code: 'AUD',
        name_plural: 'Australian dollars',
        img: australianDollarIcon,
      },
      {
        symbol: 'CA$',
        name: 'Canadian Dollar',
        symbol_native: '$',
        decimal_digits: 2,
        rounding: 0,
        code: 'CAD',
        name_plural: 'Canadian dollars',
        img: canadianDollarIcon,
      },
    ]);
  });

  test('returns matching currencies for partial code match', () => {
    const result = getCurrencyBySearch('ars', currencyQuotes);

    expect(result).toEqual([
      {
        symbol: 'AR$',
        name: 'Argentine Peso',
        symbol_native: '$',
        decimal_digits: 2,
        rounding: 0,
        code: 'ARS',
        name_plural: 'Argentine pesos',
        img: pesoArgentinoIcon,
      },
    ]);
  });
});
