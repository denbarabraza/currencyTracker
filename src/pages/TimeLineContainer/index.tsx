import React from 'react';
import { connect } from 'react-redux';
import { TimeLine } from 'src/pages/TimeLine';

import {
  CommonTimeLineCCType,
  IMapDispatchToProps,
  IMapStateToProps,
} from '@/pages/TimeLineContainer/types';
import { setCurrencyForTimeLine, setDataForChart } from '@/store/actions/currencyActions';
import {
  fetchCurrencyDayOhlcvThunk,
  fetchCurrencyMonthOhlcvThunk,
} from '@/store/thunks/currencyThunks';
import { RootStoreType } from '@/store/types';

class TimeLineContainer extends React.Component<CommonTimeLineCCType> {
  render() {
    return <TimeLine {...this.props} />;
  }
}

const mapStateToProps = (state: RootStoreType): IMapStateToProps => {
  return {
    currencyTimeLineName: state.currency.currencyTimeLine,
    period: state.currency.period,
    selectedDay: state.currency.selectedDay,
    dataChar: state.currency.dataForChart,
    errorCurrency: state.currency.errorCurrency,
  };
};

const mapDispatchToProps: IMapDispatchToProps = {
  setCurrencyForTimeLine,
  setDataForChart,
  fetchCurrencyDayOhlcvThunk,
  fetchCurrencyMonthOhlcvThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeLineContainer);
