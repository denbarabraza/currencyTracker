import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';

import { mapAPI } from '@/api/api';
import { setStatusApp } from '@/store/actions/appActions';
import { fetchBanksOfCities, setErrorMap } from '@/store/actions/mapActions';
import { RequestStatusType } from '@/store/reducers/app/types';
import { AppThunk } from '@/store/store';
import { ICity } from '@/types/ICity';

export const fetchBanksOfCitiesThunk =
  (city: ICity): AppThunk =>
  async (dispatch: Dispatch) => {
    try {
      dispatch(setStatusApp(RequestStatusType.Loading));

      const res = await mapAPI.getBanks(city);

      dispatch(fetchBanksOfCities(res));
      dispatch(setErrorMap(null));
      dispatch(setStatusApp(RequestStatusType.Succeeded));
    } catch (e) {
      if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
        const err = e.response ? e.response?.data.message : e.message;

        dispatch(setErrorMap(err));
      }
      dispatch(setStatusApp(RequestStatusType.Failed));
    }
  };
