import {
  fetchCurrencies,
  setConvertValue,
  setCurrencyFrom,
  setCurrencyTo,
  setErrorCurrency,
} from '@/store/actions/currencyActions';

export interface ICurrencyState {
  currencies: ICurrencies | null;
  errorCurrency: string | null;
  convertFrom: string | null;
  convertTo: string | null;
  convertValue: number | null;
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
  | ReturnType<typeof setConvertValue>;
