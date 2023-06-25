import { ActionsCurrencyType, ICurrencyState } from '@/store/reducers/currency/types';

const initialState: ICurrencyState = {
  currencies: null,
  errorCurrency: null,
  convertFrom: null,
  convertTo: null,
  convertValue: 55,
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
    default:
      return state;
  }
};
