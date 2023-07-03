import { RootStoreType } from '@/store/types';

export const getSearchCurrencySelector = (state: RootStoreType) =>
  state.map.searchCurrency;
