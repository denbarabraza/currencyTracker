import axios from 'axios';

import { ICurrencies } from '@/store/reducers/currency/types';
import { ICurrencyDayResponse } from '@/types/api';

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
  getCurrencyDayData(currencyCode: string, day: string) {
    return axios
      .get<ICurrencyDayResponse[]>(
        `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_${currencyCode}_USD/history?period_id=1DAY&time_start=${day}T00:00:00`,
        {
          headers: {
            'X-CoinAPI-Key': '5441514E-9326-458D-BC01-80B01773CC05',
          },
        },
      )
      .then(res => res.data);
  },
};
