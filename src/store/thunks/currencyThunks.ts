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

export const fetchCurrencyThunk = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatusApp(RequestStatusType.Loading));
    const res = await currencyAPI.getCurrency();

    dispatch(fetchCurrencies(res));
    dispatch(setErrorCurrency(null));
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
      dispatch(setErrorCurrency(null));
      dispatch(setStatusApp(RequestStatusType.Succeeded));
    } catch (e) {
      if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
        const err = e.response ? e.response?.data.message : e.message;

        dispatch(setErrorCurrency(err));
      }
      dispatch(setStatusApp(RequestStatusType.Failed));
    }
  };
