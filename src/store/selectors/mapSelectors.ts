import { RootStoreType } from '@/store/store';

export const getBanksSelector = (state: RootStoreType) => state.map.banksOfCities;

export const getErrorFromMap = (state: RootStoreType) => state.map.error;
export const getSearchCurrencySelector = (state: RootStoreType) =>
  state.map.searchCurrency;
