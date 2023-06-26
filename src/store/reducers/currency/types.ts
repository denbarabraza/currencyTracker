import {
  fetchCurrencies,
  setConvertValue,
  setCurrencyForTimeLine,
  setCurrencyFrom,
  setCurrencyTo,
  setDataForChart,
  setDayTimeLine,
  setErrorCurrency,
  setPeriodTimeLine,
} from '@/store/actions/currencyActions';
import { ICurrencyDayResponse } from '@/types/api';
import { PeriodEnum } from '@/types/period';

export interface ICurrencyState {
  currencies: ICurrencies | null;
  errorCurrency: string | null;
  convertFrom: string | null;
  convertTo: string | null;
  convertValue: number | null;
  currencyTimeLine: string | null;
  period: PeriodEnum;
  selectedDay: string | null;
  dataForChart: ICurrencyDayResponse[] | null;
}

export interface ICurrencies {
  meta: { last_updated_at: string };
  data: {
    [key: string]: {
      code: string;
      value: number;
    };
  };
}

export type ActionsCurrencyType =
  | ReturnType<typeof fetchCurrencies>
  | ReturnType<typeof setErrorCurrency>
  | ReturnType<typeof setCurrencyFrom>
  | ReturnType<typeof setCurrencyTo>
  | ReturnType<typeof setConvertValue>
  | ReturnType<typeof setCurrencyForTimeLine>
  | ReturnType<typeof setPeriodTimeLine>
  | ReturnType<typeof setDayTimeLine>
  | ReturnType<typeof setDataForChart>;
