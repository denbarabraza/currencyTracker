import { fetchCurrencies } from '@/store/actions/currencyActions';

export interface ICurrencyState {
  currencies: ICurrencies | null;
}

export interface ICurrencies {
  meta: { last_updated_at: string };
  data: {
    [key: string]: {
      code: string;
      value: number;
    };
  };
}

export type ActionsCurrencyType = ReturnType<typeof fetchCurrencies>;
