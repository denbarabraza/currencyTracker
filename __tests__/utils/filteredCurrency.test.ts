import dollarIcon from '@/assets/image/dollarIcon.svg';
import { currencyQuotes } from '@/constants/currency';
import { ICurrencyQuotes } from '@/types/currency';
import { filteredCurrency } from '@/utils/filteredCurrency';

describe('filteredCurrency', () => {
  const testCurrency: ICurrencyQuotes = {
    symbol: '$',
    name: 'US Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'USD',
    name_plural: 'US dollars',
    img: dollarIcon,
  };

  test('returns array without the current currency', () => {
    const result = filteredCurrency(testCurrency);

    expect(result).toHaveLength(9);
    expect(result).not.toContain(testCurrency);
  });

  test('does not modify the original array', () => {
    const originalArray = [...currencyQuotes];

    filteredCurrency(testCurrency);
    expect(currencyQuotes).toEqual(originalArray);
  });
});
