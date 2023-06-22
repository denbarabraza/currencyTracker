import axios from 'axios';

export const currencyAPI = {
  getCurrency() {
    return axios
      .get(
        'https://api.currencyapi.com/v3/latest?apikey=xHCMR0lUwRgjg62uTRw9Wj09CIJLAIMZBZYTRI37&currencies=EUR%2CUSD%2CCAD%2CAUD%2CTRY%2CARS%2CJPY%2CCNY%2CBTC',
      )
      .then(res => res.data);
  },
};
