import { IBank, IBanksData } from '@/types/bank';

export const getCurrentBanks = (
  banks: IBanksData | null,
  searchCurrency: string,
): IBank[] | undefined => {
  switch (searchCurrency) {
    case 'EUR || USD':
      return banks?.results;
    case 'CAD':
      return banks?.results.filter(bank => {
        return (
          bank.name.toLowerCase().includes('bsb') ||
          bank.name.toLowerCase().includes('приор') ||
          bank.name.toLowerCase().includes('бнб') ||
          bank.name.toLowerCase().includes('белинвест')
        );
      });
    case 'ARS':
      return banks?.results.filter(bank => {
        return (
          bank.name.toLowerCase().includes('bsb') ||
          bank.name.toLowerCase().includes('альфа') ||
          bank.name.toLowerCase().includes('вэб') ||
          bank.name.toLowerCase().includes('мтб') ||
          bank.name.toLowerCase().includes('дабрабыт')
        );
      });
    case 'TRY':
      return banks?.results.filter(bank => {
        return (
          bank.name.toLowerCase().includes('bsb') ||
          bank.name.toLowerCase().includes('приор') ||
          bank.name.toLowerCase().includes('вэб') ||
          bank.name.toLowerCase().includes('инвест') ||
          bank.name.toLowerCase().includes('абсолют')
        );
      });
    case 'BTH':
      return banks?.results.filter(bank => {
        return (
          bank.name.toLowerCase().includes('альфа') ||
          bank.name.toLowerCase().includes('бнб') ||
          bank.name.toLowerCase().includes('мтб') ||
          bank.name.toLowerCase().includes('сбер')
        );
      });
    case 'ETH':
      return banks?.results.filter(bank => {
        return (
          bank.name.toLowerCase().includes('техно') ||
          bank.name.toLowerCase().includes('вэб') ||
          bank.name.toLowerCase().includes('дабрабыт') ||
          bank.name.toLowerCase().includes('сбер')
        );
      });
    case 'JPY':
      return banks?.results.filter(bank => {
        return (
          bank.name.toLowerCase().includes('альфа') ||
          bank.name.toLowerCase().includes('техно') ||
          bank.name.toLowerCase().includes('абсолют') ||
          bank.name.toLowerCase().includes('сбер')
        );
      });
    case 'AUD':
      return banks?.results.filter(bank => {
        return (
          bank.name.toLowerCase().includes('белинвест') ||
          bank.name.toLowerCase().includes('техно') ||
          bank.name.toLowerCase().includes('абсолют') ||
          bank.name.toLowerCase().includes('бнб')
        );
      });
    case 'CNY':
      return banks?.results.filter(bank => {
        return (
          bank.name.toLowerCase().includes('альфа') ||
          bank.name.toLowerCase().includes('приор') ||
          bank.name.toLowerCase().includes('дабрабыт') ||
          bank.name.toLowerCase().includes('мтб') ||
          bank.name.toLowerCase().includes('сбер')
        );
      });
    default:
      return banks?.results;
  }
};
