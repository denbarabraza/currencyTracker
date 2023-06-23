import axios from 'axios';

const CURRENCY_KEY = process.env.CURRENCY_API_KEY;

export const currencyAPI = {
  getCurrency() {
    return axios
      .get(
        `https://api.currencyapi.com/v3/latest?apikey=${CURRENCY_KEY}&currencies=EUR%2CUSD%2CCAD%2CAUD%2CTRY%2CARS%2CJPY%2CCNY%2CBTC`,
      )
      .then(res => res.data);
  },
};
