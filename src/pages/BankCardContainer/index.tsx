import React from 'react';
import { connect } from 'react-redux';
import { BankCard } from 'src/pages/BankCard';

import {
  CommonBankCardCCType,
  IMapDispatchToProps,
  IMapStateToProps,
} from '@/pages/BankCardContainer/types';
import { setSearchCurrency } from '@/store/actions/mapActions';
import { fetchBanksOfCitiesThunk, fetchGeoThunk } from '@/store/thunks/mapThunks';
import { RootStoreType } from '@/store/types';

class BankCardContainer extends React.Component<CommonBankCardCCType> {
  render() {
    return <BankCard {...this.props} />;
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
