import australianDollarIcon from '@/assets/image/australianDollarIcon.svg';
import bitcoinIcon from '@/assets/image/bitcoinIcon.svg';
import bovespaIcon from '@/assets/image/bovespaIcon.svg';
import canadianDollarIcon from '@/assets/image/canadianDollarIcon.svg';
import dollarIcon from '@/assets/image/dollarIcon.svg';
import ethereum from '@/assets/image/ethereum.svg';
import euroIcon from '@/assets/image/euroIcon.svg';
import ifixIcon from '@/assets/image/IFIX.svg';
import libraIcon from '@/assets/image/libraIcon.svg';
import pesoArgentinoIcon from '@/assets/image/pesoArgentinoIcon.svg';
import yuanIcon from '@/assets/image/wonIcon.svg';
import yenIcon from '@/assets/image/yenIcon.svg';
import { ICurrencyQuotes, ICurrencyStocks } from '@/types/ICurrency';

export const currencyQuotes: ICurrencyQuotes[] = [
  {
    symbol: 'AR$',
    name: 'Argentine Peso',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'ARS',
    name_plural: 'Argentine pesos',
    img: pesoArgentinoIcon,
  },
  {
    symbol: 'AU$',
    name: 'Australian Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'AUD',
    name_plural: 'Australian dollars',
    img: australianDollarIcon,
  },
  {
    symbol: 'CA$',
    name: 'Canadian Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'CAD',
    name_plural: 'Canadian dollars',
    img: canadianDollarIcon,
  },
  {
    symbol: 'CN¥',
    name: 'Chinese Yuan',
    symbol_native: 'CN¥',
    decimal_digits: 2,
    rounding: 0,
    code: 'CNY',
    name_plural: 'Chinese yuan',
    img: yuanIcon,
  },
  {
    symbol: '€',
    name: 'Euro',
    symbol_native: '€',
    decimal_digits: 2,
    rounding: 0,
    code: 'EUR',
    name_plural: 'Euros',
    img: euroIcon,
  },
  {
    symbol: '¥',
    name: 'Japanese Yen',
    symbol_native: '￥',
    decimal_digits: 0,
    rounding: 0,
    code: 'JPY',
    name_plural: 'Japanese yen',
    img: yenIcon,
  },
  {
    symbol: 'TL',
    name: 'Turkish Lira',
    symbol_native: 'TL',
    decimal_digits: 2,
    rounding: 0,
    code: 'TRY',
    name_plural: 'Turkish Lira',
    img: libraIcon,
  },
  {
    symbol: '$',
    name: 'US Dollar',
    symbol_native: '$',
    decimal_digits: 2,
    rounding: 0,
    code: 'USD',
    name_plural: 'US dollars',
    img: dollarIcon,
  },
  {
    symbol: '₿',
    name: 'Bitcoin',
    symbol_native: '₿',
    decimal_digits: 8,
    rounding: 0,
    code: 'BTC',
    name_plural: 'Bitcoins',
    img: bitcoinIcon,
  },
  {
    symbol: 'Ξ',
    name: 'Ethereum',
    symbol_native: 'Ξ',
    decimal_digits: 18,
    rounding: 0,
    code: 'ETH',
    name_plural: 'Ethereum',
    img: ethereum,
  },
];

export const currencyStock: ICurrencyStocks[] = [
  {
    name: 'Bovespa Index',
    value: '15%',
    img: bovespaIcon,
  },
  {
    name: 'IFIX',
    value: '15%',
    img: ifixIcon,
  },
];
