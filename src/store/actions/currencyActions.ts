import { ICurrencies } from '@/store/reducers/currency/types';

export const fetchCurrencies = (currencies: ICurrencies) => {
  return {
    type: 'CURRENCY/FETCH_CURRENCY',
    payload: currencies,
  };
};
