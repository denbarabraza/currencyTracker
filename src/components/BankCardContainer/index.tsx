import React from 'react';
import { connect } from 'react-redux';

import {
  ICommonBankCardContainer,
  IMapDispatchToProps,
  IMapStateToProps,
} from '@/components/BankCardContainer/interface';
import { ErrorInfo } from '@/components/ErrorInfo';
import { BankCard } from '@/pages/BankCard';
import { setSearchCurrency } from '@/store/actions/mapActions';
import { fetchBanksOfCitiesThunk, fetchGeoThunk } from '@/store/thunks/mapThunks';
import { RootStoreType } from '@/store/types';

class BankCardContainer extends React.Component<ICommonBankCardContainer> {
  render() {
    const { errorMap, ...rest } = this.props;

    return errorMap ? <ErrorInfo error={errorMap} /> : <BankCard {...rest} />;
  }
}

const mapStateToProps = (state: RootStoreType): IMapStateToProps => {
  return {
    theme: state.app.currentTheme,
    banks: state.map.banksOfCities,
    errorMap: state.map.error,
    searchCurrency: state.map.searchCurrency,
    geo: state.map.geo,
  };
};

const mapDispatchToProps: IMapDispatchToProps = {
  setSearchCurrency,
  fetchBanksOfCitiesThunk,
  fetchGeoThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(BankCardContainer);
