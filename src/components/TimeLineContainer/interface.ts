import { ICurrencyChartResponse } from '@/types/api';
import { ICurrencyQuotes } from '@/types/currency';
import { periodEnum } from '@/types/period';

export interface ICommonTimeLineContainer extends IMapStateToProps, IMapDispatchToProps {}

export interface ICommonTimeLine
  extends Omit<ICommonTimeLineContainer, 'errorCurrency'> {}

export interface ITimeLineState {
  selectCurrency: ICurrencyQuotes[];
  code: string | null | undefined;
}

export interface IMapStateToProps {
  currencyTimeLineName: string | null;
  period: periodEnum;
  selectedDay: string | null;
  dataChar: ICurrencyChartResponse[] | null;
  errorCurrency: string | null;
}

export interface IMapDispatchToProps {
  setCurrencyForTimeLine: (currency: string) => void;
  setDataForChart: (data: ICurrencyChartResponse[] | null) => void;
  fetchCurrencyDayOhlcvThunk: (currencyCode: string, day: string) => void;
  fetchCurrencyMonthOhlcvThunk: (currencyCode: string, timeStartMonth: string) => void;
}
