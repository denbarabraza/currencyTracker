import { RootStoreType } from '@/store/store';

export const getCurrencySelector = (state: RootStoreType) => state.currency.currencies;
export const getDateSelector = (state: RootStoreType) => state.currency.currencies;
export const getCurrencyToSelector = (state: RootStoreType) => state.currency.convertTo;
export const getCurrencyFromSelector = (state: RootStoreType) =>
  state.currency.convertFrom;

export const getErrorCurrencySelector = (state: RootStoreType) =>
  state.currency.errorCurrency;
export const getConverterValueSelector = (state: RootStoreType) =>
  state.currency.convertValue;

export const getCurrencyForTimeLineSelector = (state: RootStoreType) =>
  state.currency.currencyTimeLine;

export const getPeriodTimeLineSelector = (state: RootStoreType) => state.currency.period;
export const getDayTimeLineSelector = (state: RootStoreType) =>
  state.currency.selectedDay;

export const getDataChartSelector = (state: RootStoreType) => state.currency.dataForChart;
