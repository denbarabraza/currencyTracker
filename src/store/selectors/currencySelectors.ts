import { RootStoreType } from '@/store/store';

export const getCurrencySelector = (state: RootStoreType) => state.currency.currencies;
export const getDateSelector = (state: RootStoreType) => state.currency.currencies;
