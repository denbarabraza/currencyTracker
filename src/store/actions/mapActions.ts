import { IBanksData } from '@/types/IBank';

export const fetchBanksOfCities = (banks: IBanksData) => {
  return {
    type: 'MAP/FETCH_BANKS',
    payload: banks,
  } as const;
};
