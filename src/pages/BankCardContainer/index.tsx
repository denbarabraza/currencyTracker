import React from 'react';
import { connect } from 'react-redux';

import { BankCardCC } from '@/pages/BankCardCC';
import {
  CommonBankCardCCType,
  IMapDispatchToProps,
  IMapStateToProps,
} from '@/pages/BankCardContainer/types';
import { setSearchCurrency } from '@/store/actions/mapActions';
import { RootStoreType } from '@/store/store';
import { fetchBanksOfCitiesThunk } from '@/store/thunks/mapThunks';

class BankCardContainer extends React.Component<CommonBankCardCCType> {
  render() {
    return <BankCardCC {...this.props} />;
  }
}

const mapStateToProps = (state: RootStoreType): IMapStateToProps => {
  return {
    theme: state.app.currentTheme,
    banks: state.map.banksOfCities,
    errorMap: state.map.error,
    searchCurrency: state.map.searchCurrency,
  };
};

const mapDispatchToProps: IMapDispatchToProps = {
  setSearchCurrency,
  fetchBanksOfCitiesThunk,
};

export default connect(mapStateToProps, mapDispatchToProps)(BankCardContainer);
