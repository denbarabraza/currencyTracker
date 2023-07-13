import React from 'react';
import { connect } from 'react-redux';

import { ErrorInfo } from '@/components/ErrorInfo';
import {
  ICommonTimeLineContainer,
  IMapDispatchToProps,
  IMapStateToProps,
} from '@/components/TimeLineContainer/interfaces';
import { TimeLine } from '@/pages/TimeLine';
import { setCurrencyForTimeLine, setDataForChart } from '@/store/actions/timeLineActions';
import {
  fetchCurrencyDayOhlcvThunk,
  fetchCurrencyMonthOhlcvThunk,
} from '@/store/thunks/timeLineThunks';
import { RootStoreType } from '@/store/types';

class TimeLineContainer extends React.Component<ICommonTimeLineContainer> {
  render() {
    const { errorCurrency, ...rest } = this.props;

    return errorCurrency ? <ErrorInfo error={errorCurrency} /> : <TimeLine {...rest} />;
  }
}

const mapStateToProps = (state: RootStoreType): IMapStateToProps => {
  return {
    currencyTimeLineName: state.timeLine.currencyTimeLine,
    period: state.timeLine.period,
    selectedDay: state.timeLine.selectedDay,
    dataChar: state.timeLine.dataForChart,
    errorCurrency: state.home.errorCurrency,
  };
};

const mapDispatchToProps: IMapDispatchToProps = {
  setCurrencyForTimeLine,
  setDataForChart,
  fetchCurrencyDayOhlcvThunk,
  fetchCurrencyMonthOhlcvThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeLineContainer);
