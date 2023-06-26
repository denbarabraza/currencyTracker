import { ActionsCurrencyType, ICurrencyState } from '@/store/reducers/currency/types';
import { PeriodEnum } from '@/types/period';

const initialState: ICurrencyState = {
  currencies: null,
  errorCurrency: null,
  convertFrom: null,
  convertTo: null,
  convertValue: null,
  currencyTimeLine: null,
  period: PeriodEnum.Day,
  selectedDay: null,
  dataForChart: null,
};

export const currencyReducer = (
  state = initialState,
  action: ActionsCurrencyType,
): ICurrencyState => {
  switch (action.type) {
    case 'CURRENCY/FETCH_CURRENCY':
      return {
        ...state,
        currencies: action.payload,
      };
    case 'CURRENCY/SET_ERROR_CURRENCY':
      return {
        ...state,
        errorCurrency: action.payload.errorCurrency,
      };
    case 'CURRENCY/SET_CURRENCY_FROM':
      return {
        ...state,
        convertFrom: action.payload.currencyFrom,
      };
    case 'CURRENCY/SET_CURRENCY_TO':
      return {
        ...state,
        convertTo: action.payload.currencyTo,
      };
    case 'CURRENCY/SET_CONVERT_VALUE':
      return {
        ...state,
        convertValue: action.payload.convertValue,
      };
    case 'CURRENCY/SET_CURRENCY_FOR_TIMELINE':
      return {
        ...state,
        currencyTimeLine: action.payload.currency,
      };
    case 'CURRENCY/SET_PERIOD_TIMELINE':
      return {
        ...state,
        period: action.payload.period,
      };
    case 'CURRENCY/SET_DAY_TIMELINE':
      return {
        ...state,
        selectedDay: action.payload.day,
      };
    case 'CURRENCY/SET_DATA_CHART_TIMELINE':
      return {
        ...state,
        dataForChart: action.payload.data,
      };
    default:
      return state;
  }
};
