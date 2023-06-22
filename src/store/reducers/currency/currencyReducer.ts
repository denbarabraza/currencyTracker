import axios, { AxiosError } from 'axios';
import { Dispatch } from 'redux';

import { currencyAPI } from '@/api/api';
import { setErrorApp, setStatusApp } from '@/store/actions/appActions';
import { fetchCurrencies } from '@/store/actions/currencyActions';
import { ActionsCurrencyType, ICurrencyState } from '@/store/reducers/currency/types';

const initialState: ICurrencyState = {
  currencies: null,
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
    default:
      return state;
  }
};

export const fetchCurrencyThunk = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setStatusApp('loading'));
    const res = await currencyAPI.getCurrency();

    dispatch(fetchCurrencies(res));
    dispatch(setStatusApp('succeeded'));
  } catch (e) {
    if (axios.isAxiosError<AxiosError<{ message: string }>>(e)) {
      const err = e.response ? e.response?.data.message : e.message;

      dispatch(setErrorApp(err));
    }
    dispatch(setStatusApp('failed'));
  }
};
