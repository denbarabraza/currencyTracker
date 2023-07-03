import { ActionsCurrencyType, ITimeLineState } from '@/store/reducers/timeLine/types';
import { periodEnum } from '@/types/period';

const initialState: ITimeLineState = {
  currencyTimeLine: 'Bitcoin',
  period: periodEnum.Day,
  selectedDay: null,
  dataForChart: null,
};

export const timeLineReducer = (
  state = initialState,
  action: ActionsCurrencyType,
): ITimeLineState => {
  switch (action.type) {
    case 'CURRENCY/SET_CURRENCY_FOR_TIMELINE':
      return {
        ...state,
        currencyTimeLine: action.payload.currency,
      };
    case 'CURRENCY/SET_PERIOD_TIMELINE':
      return {
        ...state,
        period: action.payload.period,
      };
    case 'CURRENCY/SET_DAY_TIMELINE':
      return {
        ...state,
        selectedDay: action.payload.day,
      };
    case 'CURRENCY/SET_DATA_CHART_TIMELINE':
      return {
        ...state,
        dataForChart: action.payload.data,
      };
    default:
      return state;
  }
};
