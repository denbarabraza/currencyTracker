import axios from 'axios';

import { ICurrencies } from '@/store/reducers/currency/types';

const CURRENCY_KEY = process.env.CURRENCY_API_KEY;

export const currencyAPI = {
  getCurrency() {
    return axios
      .get<ICurrencies>(
        `https://api.currencyapi.com/v3/latest?apikey=${CURRENCY_KEY}&currencies=EUR%2CUSD%2CCAD%2CAUD%2CTRY%2CARS%2CJPY%2CCNY%2CBTC`,
      )
      .then(res => res.data);
  },
  getConversion(currencyFrom: string, currencyTo: string) {
    return axios
      .get<ICurrencies>(
        `https://api.currencyapi.com/v3/latest?apikey=${CURRENCY_KEY}&currencies=${currencyTo}&base_currency=${currencyFrom}`,
      )
      .then(res => res.data);
  },
};
