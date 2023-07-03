import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';

import { mapAPI } from '@/api/api';
import { setStatusApp } from '@/store/actions/appActions';
import {
  fetchBanksOfCities,
  setErrorMap,
  setGeoPosition,
} from '@/store/actions/mapActions';
import { RequestStatusType } from '@/store/reducers/app/types';
import { AppThunk } from '@/store/types';
import { ISelectedCity } from '@/types/city';

export const fetchBanksOfCitiesThunk =
  (city: ISelectedCity): AppThunk =>
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

export const fetchGeoThunk = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatusApp(RequestStatusType.Loading));
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          dispatch(setGeoPosition(position.coords));
        },
        error => {
          if (error.code === error.PERMISSION_DENIED) {
            dispatch(setErrorMap('Access to the location was denied by the user'));
          } else {
            dispatch(setErrorMap(error.message));
          }
        },
      );
    } else {
      dispatch(setErrorMap('Your browser does not support geolocation'));
    }
  } finally {
    dispatch(setStatusApp(RequestStatusType.Succeeded));
  }
};
