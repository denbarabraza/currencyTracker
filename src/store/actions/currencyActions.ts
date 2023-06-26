import { ICurrencies } from '@/store/reducers/currency/types';
import { PeriodEnum } from '@/types/period';

export const fetchCurrencies = (currencies: ICurrencies) => {
  return {
    type: 'CURRENCY/FETCH_CURRENCY',
    payload: currencies,
  } as const;
};

export const setErrorCurrency = (errorCurrency: string | null) => {
  return {
    type: 'CURRENCY/SET_ERROR_CURRENCY',
    payload: { errorCurrency },
  } as const;
};

export const setCurrencyFrom = (currencyFrom: string | null) => {
  return {
    type: 'CURRENCY/SET_CURRENCY_FROM',
    payload: { currencyFrom },
  } as const;
};

export const setCurrencyTo = (currencyTo: string | null) => {
  return {
    type: 'CURRENCY/SET_CURRENCY_TO',
    payload: { currencyTo },
  } as const;
};

export const setConvertValue = (convertValue: number) => {
  return {
    type: 'CURRENCY/SET_CONVERT_VALUE',
    payload: { convertValue },
  } as const;
};

export const setCurrencyForTimeLine = (currency: string) => {
  return {
    type: 'CURRENCY/SET_CURRENCY_FOR_TIMELINE',
    payload: { currency },
  } as const;
};

export const setPeriodTimeLine = (period: PeriodEnum) => {
  return {
    type: 'CURRENCY/SET_PERIOD_TIMELINE',
    payload: { period },
  } as const;
};
