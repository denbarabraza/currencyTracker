import { ICurrencyChartResponse } from '@/types/api';
import { periodEnum } from '@/types/period';

export type CommonTimeLineCCType = IMapStateToProps & IMapDispatchToProps;

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
