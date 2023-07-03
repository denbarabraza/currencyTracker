import {
  setCurrencyForTimeLine,
  setDataForChart,
  setDayTimeLine,
  setPeriodTimeLine,
} from '@/store/actions/timeLineActions';
import { ICurrencyChartResponse } from '@/types/api';
import { periodEnum } from '@/types/period';

export interface ITimeLineState {
  currencyTimeLine: string | null;
  period: periodEnum;
  selectedDay: string | null;
  dataForChart: ICurrencyChartResponse[] | null;
}

export type ActionsCurrencyType =
  | ReturnType<typeof setCurrencyForTimeLine>
  | ReturnType<typeof setPeriodTimeLine>
  | ReturnType<typeof setDayTimeLine>
  | ReturnType<typeof setDataForChart>;
