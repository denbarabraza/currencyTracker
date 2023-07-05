import {
  setCurrencyForTimeLine,
  setDataForChart,
  setDayTimeLine,
  setPeriodTimeLine,
} from '@/store/actions/timeLineActions';
import { timeLineReducer } from '@/store/reducers/timeLine/timeLineReducer';
import { ITimeLineState } from '@/store/reducers/timeLine/types';
import { ICurrencyChartResponse } from '@/types/api';
import { periodEnum } from '@/types/period';

describe('timeLineReducer', () => {
  const initialState: ITimeLineState = {
    currencyTimeLine: 'Bitcoin',
    period: periodEnum.Day,
    selectedDay: null,
    dataForChart: null,
  };

  it('should handle CURRENCY/SET_CURRENCY_FOR_TIMELINE', () => {
    const currency = 'Ethereum';
    const action = setCurrencyForTimeLine(currency);
    const newState = timeLineReducer(initialState, action);

    expect(newState.currencyTimeLine).toEqual(currency);
  });

  it('should handle CURRENCY/SET_PERIOD_TIMELINE', () => {
    const period = periodEnum.Month;
    const action = setPeriodTimeLine(period);
    const newState = timeLineReducer(initialState, action);

    expect(newState.period).toEqual(period);
  });

  it('should handle CURRENCY/SET_DAY_TIMELINE', () => {
    const day = '2022-01-01';
    const action = setDayTimeLine(day);
    const newState = timeLineReducer(initialState, action);

    expect(newState.selectedDay).toEqual(day);
  });

  it('should handle CURRENCY/SET_DATA_CHART_TIMELINE', () => {
    const data: ICurrencyChartResponse[] = [
      {
        price_close: 123.45,
        price_high: 234.56,
        price_low: 12.34,
        price_open: 45.67,
        time_close: '2022-01-01T00:00:00Z',
        time_open: '2022-01-01T00:00:00Z',
        time_period_end: '2022-01-01T23:59:59Z',
        time_period_start: '2022-01-01T00:00:00Z',
        trades_count: 123,
        volume_traded: 456.78,
      },
    ];
    const action = setDataForChart(data);
    const newState = timeLineReducer(initialState, action);

    expect(newState.dataForChart).toEqual(data);
  });
});

describe('setCurrencyForTimeLine', () => {
  it('should create an action to set the currency for the timeline', () => {
    const currency = 'Ethereum';
    const expectedAction = {
      type: 'CURRENCY/SET_CURRENCY_FOR_TIMELINE',
      payload: { currency },
    };

    expect(setCurrencyForTimeLine(currency)).toEqual(expectedAction);
  });
});

describe('setPeriodTimeLine', () => {
  it('should create an action to set the period for the timeline', () => {
    const period = periodEnum.Month;
    const expectedAction = {
      type: 'CURRENCY/SET_PERIOD_TIMELINE',
      payload: { period },
    };

    expect(setPeriodTimeLine(period)).toEqual(expectedAction);
  });
});

describe('setDayTimeLine', () => {
  it('should create an action to set the day for the timeline', () => {
    const day = '2022-01-01';
    const expectedAction = {
      type: 'CURRENCY/SET_DAY_TIMELINE',
      payload: { day },
    };

    expect(setDayTimeLine(day)).toEqual(expectedAction);
  });
});

describe('setDataForChart', () => {
  it('should handle SET_DATA_CHART_TIMELINE', () => {
    const initialState: ITimeLineState = {
      currencyTimeLine: 'Bitcoin',
      period: periodEnum.Day,
      selectedDay: null,
      dataForChart: null,
    };
    const data: ICurrencyChartResponse[] = [
      {
        price_close: 123.45,
        price_high: 234.56,
        price_low: 12.34,
        price_open: 45.67,
        time_close: '2022-01-01T00:00:00Z',
        time_open: '2022-01-01T00:00:00Z',
        time_period_end: '2022-01-01T23:59:59Z',
        time_period_start: '2022-01-01T00:00:00Z',
        trades_count: 123,
        volume_traded: 456.78,
      },
    ];
    const action = setDataForChart(data);
    const newState = timeLineReducer(initialState, action);

    expect(newState.dataForChart).toEqual(data);
  });
});
