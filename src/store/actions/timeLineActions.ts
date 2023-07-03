import { ICurrencyChartResponse } from '@/types/api';
import { periodEnum } from '@/types/period';

export const setCurrencyForTimeLine = (currency: string) => {
  return {
    type: 'CURRENCY/SET_CURRENCY_FOR_TIMELINE',
    payload: { currency },
  } as const;
};

export const setPeriodTimeLine = (period: periodEnum) => {
  return {
    type: 'CURRENCY/SET_PERIOD_TIMELINE',
    payload: { period },
  } as const;
};

export const setDayTimeLine = (day: string | null) => {
  return {
    type: 'CURRENCY/SET_DAY_TIMELINE',
    payload: { day },
  } as const;
};

export const setDataForChart = (data: ICurrencyChartResponse[] | null) => {
  return {
    type: 'CURRENCY/SET_DATA_CHART_TIMELINE',
    payload: { data },
  } as const;
};
