import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';

import { currencyAPI } from '@/api/api';
import { setStatusApp } from '@/store/actions/appActions';
import {
  fetchCurrencies,
  setConvertValue,
  setErrorCurrency,
} from '@/store/actions/currencyActions';
import { RequestStatusType } from '@/store/reducers/app/types';
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

export const fetchCurrencyThunk = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatusApp(RequestStatusType.Loading));
    const res = await currencyAPI.getCurrency();

    dispatch(fetchCurrencies(res));
    dispatch(setStatusApp(RequestStatusType.Succeeded));
  } catch (e) {
    if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
      const err = e.response ? e.response?.data.message : e.message;

      dispatch(setErrorCurrency(err));
    }
    dispatch(setStatusApp(RequestStatusType.Failed));
  }
};

export const fetchConversionThunk =
  (codeCurrencyFrom: string, codeCurrencyTo: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(setStatusApp(RequestStatusType.Loading));

      const res = await currencyAPI.getConversion(codeCurrencyFrom, codeCurrencyTo);

      dispatch(setConvertValue(res.data[codeCurrencyTo].value));
      dispatch(setStatusApp(RequestStatusType.Succeeded));
    } catch (e) {
      if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
        const err = e.response ? e.response?.data.message : e.message;

        dispatch(setErrorCurrency(err));
      }
      dispatch(setStatusApp(RequestStatusType.Failed));
    }
  };
