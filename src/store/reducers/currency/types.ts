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
import { ICurrencyChartResponse } from '@/types/api';
import { periodEnum } from '@/types/period';

export interface ICurrencyState {
  currencies: ICurrencies | null;
  errorCurrency: string | null;
  convertFrom: string | null;
  convertTo: string | null;
  convertValue: number | null;
  currencyTimeLine: string | null;
  period: periodEnum;
  selectedDay: string | null;
  dataForChart: ICurrencyChartResponse[] | null;
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
