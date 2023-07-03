import { RootStoreType } from '@/store/types';

export const getCurrencySelector = (state: RootStoreType) => state.home.currencies;
export const getDateSelector = (state: RootStoreType) => state.home.currencies;
export const getCurrencyToSelector = (state: RootStoreType) => state.home.convertTo;
export const getCurrencyFromSelector = (state: RootStoreType) => state.home.convertFrom;
export const getConverterValueSelector = (state: RootStoreType) =>
  state.home.convertValue;

export const getErrorCurrencySelector = (state: RootStoreType) =>
  state.home.errorCurrency;
export const getPeriodTimeLineSelector = (state: RootStoreType) => state.timeLine.period;
