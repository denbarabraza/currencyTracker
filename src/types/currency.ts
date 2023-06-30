export interface ICurrencyQuotes {
  symbol: string;
  name: string;
  symbol_native: string;
  decimal_digits: number;
  rounding: number;
  code: string;
  name_plural: string;
  img: string;
}

export interface ICurrencyStocks {
  name: string;
  value: string;
  img: string;
}
