import React from 'react';
import { connect } from 'react-redux';

import { TimeLineCC } from '@/pages/TimeLineCC';
import { setCurrencyForTimeLine, setDataForChart } from '@/store/actions/currencyActions';
import { RootStoreType } from '@/store/store';
import {
  fetchCurrencyDayOhlcvThunk,
  fetchCurrencyMonthOhlcvThunk,
} from '@/store/thunks/currencyThunks';
import { ICurrencyChartResponse } from '@/types/api';
import { periodEnum } from '@/types/period';

class TimeLineContainer extends React.Component<CommonTimeLineCCType> {
  render() {
    return <TimeLineCC {...this.props} />;
  }
}

export type CommonTimeLineCCType = IMapStateToProps & IMapDispatchToProps;

interface IMapStateToProps {
  currencyTimeLineName: string | null;
  period: periodEnum;
  selectedDay: string | null;
  dataChar: ICurrencyChartResponse[] | null;
}

interface IMapDispatchToProps {
  setCurrencyForTimeLine: (currency: string) => void;
  setDataForChart: (data: ICurrencyChartResponse[] | null) => void;
  fetchCurrencyDayOhlcvThunk: (currencyCode: string, day: string) => void;
  fetchCurrencyMonthOhlcvThunk: (currencyCode: string, yearMonth: string) => void;
}

const mapStateToProps = (state: RootStoreType): IMapStateToProps => {
  return {
    currencyTimeLineName: state.currency.currencyTimeLine,
    period: state.currency.period,
    selectedDay: state.currency.selectedDay,
    dataChar: state.currency.dataForChart,
  };
};

const mapDispatchToProps: IMapDispatchToProps = {
  setCurrencyForTimeLine,
  setDataForChart,
  fetchCurrencyDayOhlcvThunk,
  fetchCurrencyMonthOhlcvThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeLineContainer);
