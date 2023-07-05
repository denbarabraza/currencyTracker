import { getCodeCurrency } from '@/utils/getCodeCurrency';

describe('getCodeCurrency', () => {
  test('returns null for null input', () => {
    const result = getCodeCurrency(null);

    expect(result).toBeNull();
  });

  test('returns correct currency code for valid input', () => {
    const result = getCodeCurrency('Argentine Peso');

    expect(result).toBe('ARS');
  });
});
