import {
  fetchCurrencies,
  setConvertValue,
  setCurrencyFrom,
  setCurrencyTo,
  setErrorCurrency,
} from '@/store/actions/homeActions';
import { homeReducer } from '@/store/reducers/home/homeReducer';
import { ICurrencies, IHomeState } from '@/store/reducers/home/types';

describe('homeReducer', () => {
  const initialState: IHomeState = {
    currencies: null,
    errorCurrency: null,
    convertFrom: null,
    convertTo: null,
    convertValue: null,
  };

  test('should handle CURRENCY/FETCH_CURRENCY', () => {
    const currencies: ICurrencies = {
      meta: { last_updated_at: '2023-07-05' },
      data: {
        USD: { code: 'USD', value: 1 },
        EUR: { code: 'EUR', value: 0.85 },
        GBP: { code: 'GBP', value: 0.72 },
      },
    };
    const action = fetchCurrencies(currencies);
    const newState = homeReducer(initialState, action);

    expect(newState.currencies).toEqual(currencies);
  });

  test('should handle CURRENCY/SET_ERROR_CURRENCY', () => {
    const error = 'Something went wrong';
    const action = setErrorCurrency(error);
    const newState = homeReducer(initialState, action);

    expect(newState.errorCurrency).toEqual(error);
  });

  test('should handle CURRENCY/SET_CURRENCY_FROM', () => {
    const currencyFrom = 'USD';
    const action = setCurrencyFrom(currencyFrom);
    const newState = homeReducer(initialState, action);

    expect(newState.convertFrom).toEqual(currencyFrom);
  });

  test('should handle CURRENCY/SET_CURRENCY_TO', () => {
    const currencyTo = 'EUR';
    const action = setCurrencyTo(currencyTo);
    const newState = homeReducer(initialState, action);

    expect(newState.convertTo).toEqual(currencyTo);
  });

  test('should handle CURRENCY/SET_CONVERT_VALUE', () => {
    const convertValue = 100;
    const action = setConvertValue(convertValue);
    const newState = homeReducer(initialState, action);

    expect(newState.convertValue).toEqual(convertValue);
  });
});

describe('fetchCurrencies', () => {
  test('should create an action to fetch currencies', () => {
    const currencies: ICurrencies = {
      meta: { last_updated_at: '2023-07-05' },
      data: {
        USD: { code: 'USD', value: 1 },
        EUR: { code: 'EUR', value: 0.85 },
        GBP: { code: 'GBP', value: 0.72 },
      },
    };
    const expectedAction = {
      type: 'CURRENCY/FETCH_CURRENCY',
      payload: currencies,
    };

    expect(fetchCurrencies(currencies)).toEqual(expectedAction);
  });
});

describe('setErrorCurrency', () => {
  test('should create an action to set the currency error', () => {
    const error = 'Something went wrong';
    const expectedAction = {
      type: 'CURRENCY/SET_ERROR_CURRENCY',
      payload: { errorCurrency: error },
    };

    expect(setErrorCurrency(error)).toEqual(expectedAction);
  });
});

describe('setCurrencyFrom', () => {
  test('should create an action to set the currency from', () => {
    const currencyFrom = 'USD';
    const expectedAction = {
      type: 'CURRENCY/SET_CURRENCY_FROM',
      payload: { currencyFrom },
    };

    expect(setCurrencyFrom(currencyFrom)).toEqual(expectedAction);
  });
});

describe('setCurrencyTo', () => {
  test('should create an action to set the currency to', () => {
    const currencyTo = 'EUR';
    const expectedAction = {
      type: 'CURRENCY/SET_CURRENCY_TO',
      payload: { currencyTo },
    };

    expect(setCurrencyTo(currencyTo)).toEqual(expectedAction);
  });
});

describe('setConvertValue', () => {
  test('should create an action to set the convert value', () => {
    const convertValue = 100;
    const expectedAction = {
      type: 'CURRENCY/SET_CONVERT_VALUE',
      payload: { convertValue },
    };

    expect(setConvertValue(convertValue)).toEqual(expectedAction);
  });
});
