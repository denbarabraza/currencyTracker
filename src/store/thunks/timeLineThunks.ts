import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';

import { currencyAPI } from '@/api/api';
import { setStatusApp } from '@/store/actions/appActions';
import { setErrorCurrency } from '@/store/actions/homeActions';
import { setDataForChart } from '@/store/actions/timeLineActions';
import { RequestStatusType } from '@/store/reducers/app/types';
import { AppThunk } from '@/store/types';

export const fetchCurrencyDayOhlcvThunk =
  (currencyCode: string, day: string): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setStatusApp(RequestStatusType.Loading));

      const res = await currencyAPI.getCurrencyDayData(currencyCode, day);

      dispatch(setDataForChart(res));
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

export const fetchCurrencyMonthOhlcvThunk =
  (currencyCode: string, yearMonth: string): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setStatusApp(RequestStatusType.Loading));

      const res = await currencyAPI.getCurrencyMonthData(currencyCode, yearMonth);

      dispatch(setDataForChart(res));
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
