import React from 'react';
import { connect } from 'react-redux';
import { TimeLine } from 'src/pages/TimeLine';

import {
  CommonTimeLineCCType,
  IMapDispatchToProps,
  IMapStateToProps,
} from '@/pages/TimeLineContainer/types';
import { setCurrencyForTimeLine, setDataForChart } from '@/store/actions/timeLineActions';
import {
  fetchCurrencyDayOhlcvThunk,
  fetchCurrencyMonthOhlcvThunk,
} from '@/store/thunks/timeLineThunks';
import { RootStoreType } from '@/store/types';

class TimeLineContainer extends React.Component<CommonTimeLineCCType> {
  render() {
    return <TimeLine {...this.props} />;
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
