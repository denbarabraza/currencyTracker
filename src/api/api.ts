import axios from 'axios';

import { ICurrencies } from '@/store/reducers/currency/types';
import { ICurrencyChartResponse } from '@/types/api';

const CURRENCY_KEY = process.env.CURRENCY_API_KEY;
const COINAPI_KEY = process.env.COIN_API_KEY;

const instance = axios.create({
  headers: {
    'X-CoinAPI-Key': COINAPI_KEY,
  },
  baseURL: 'https://rest.coinapi.io/v1/ohlcv/',
});

export const currencyAPI = {
  getCurrency() {
    return axios
      .get<ICurrencies>(
        `https://api.currencyapi.com/v3/latest?apikey=${CURRENCY_KEY}&currencies=EUR%2CUSD%2CCAD%2CAUD%2CTRY%2CARS%2CJPY%2CCNY%2CBTC`,
      )
      .then(res => res.data);
  },
  getConversion(currencyFrom: string, currencyTo: string) {
    return instance
      .get<ICurrencies>(
        `https://api.currencyapi.com/v3/latest?apikey=${CURRENCY_KEY}&currencies=${currencyTo}&base_currency=${currencyFrom}`,
      )
      .then(res => res.data);
  },
  getCurrencyDayData(currencyCode: string, day: string) {
    return instance
      .get<ICurrencyChartResponse[]>(
        `BITSTAMP_SPOT_${currencyCode}_USD/history?period_id=1DAY&time_start=${day}T00:00:00`,
      )
      .then(res => res.data);
  },
  getCurrencyMonthData(currencyCode: string, yearMonth: string) {
    return instance
      .get<ICurrencyChartResponse[]>(
        `BITSTAMP_SPOT_${currencyCode}_USD/history?period_id=1DAY&time_start=${yearMonth}-01T00:00:00`,
      )
      .then(res => res.data);
  },
};
