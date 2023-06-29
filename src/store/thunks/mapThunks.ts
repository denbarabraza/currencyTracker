import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';

import { mapAPI } from '@/api/api';
import { setStatusApp } from '@/store/actions/appActions';
import { setErrorCurrency } from '@/store/actions/currencyActions';
import { fetchBanksOfCities } from '@/store/actions/mapActions';
import { RequestStatusType } from '@/store/reducers/app/types';
import { AppThunk } from '@/store/store';

export const fetchBanksOfCitiesThunk =
  (city: string): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setStatusApp(RequestStatusType.Loading));

      const res = await mapAPI.getBanks(city);

      dispatch(fetchBanksOfCities(res));
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
