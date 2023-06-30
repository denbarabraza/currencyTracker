import { IBanksData } from '@/types/bank';

export const fetchBanksOfCities = (banks: IBanksData) => {
  return {
    type: 'MAP/FETCH_BANKS',
    payload: banks,
  } as const;
};

export const setErrorMap = (error: string | null) => {
  return {
    type: 'MAP/SET_ERROR',
    payload: { error },
  } as const;
};

export const setSearchCurrency = (currency: string) => {
  return {
    type: 'MAP/SET_SEARCH_CURRENCY',
    payload: { currency },
  } as const;
};
