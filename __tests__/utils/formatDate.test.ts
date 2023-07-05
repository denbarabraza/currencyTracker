import { formatDate } from '@/utils/formatDate';

describe('formatDate', () => {
  test('returns null for undefined input', () => {
    const result = formatDate(undefined);

    expect(result).toBeNull();
  });

  test('returns correctly formatted string for valid input', () => {
    const dateString = '2023-07-04T23:59:59Z';
    const result = formatDate(dateString);

    expect(result).toBe('2023-07-04 23:59:59');
  });
});
