import { mockBanks } from '@/constants/mockBanks';
import { getCurrentBanks } from '@/utils/getCurrentBanks';

describe('getCurrentBanks', () => {
  test('should return the banks where there is EUR, EUR is in all banks', () => {
    const result = getCurrentBanks(mockBanks, 'EUR');

    expect(result).toEqual(mockBanks.results);
  });

  test('should return the banks where there is TRY, TRY is only in BSB, Prior, ВЭБ, БелИнвест, Абсолют', () => {
    const result = getCurrentBanks(mockBanks, 'TRY');
    const res = mockBanks.results.filter(
      bank =>
        bank.name.toLowerCase().includes('bsb') ||
        bank.name.toLowerCase().includes('приор') ||
        bank.name.toLowerCase().includes('вэб') ||
        bank.name.toLowerCase().includes('инвест') ||
        bank.name.toLowerCase().includes('абсолют'),
    );

    expect(result).toEqual(res);
  });
});
