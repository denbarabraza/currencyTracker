import React, { Component } from 'react';
import Map, { ViewState, ViewStateChangeEvent } from 'react-map-gl';

import { Button } from '@/components/Button/Button';
import { ButtonBlock } from '@/components/Button/styled';
import { ErrorInfo } from '@/components/ErrorInfo';
import { MarkerControl } from '@/components/MarkerControl';
import { Search } from '@/components/Search';
import { cities } from '@/constants/cities';
import { Container } from '@/pages/BankCard/styled';
import { CommonBankCardCCType, IBankCardState } from '@/pages/BankCardContainer/types';
import { themeEnum } from '@/theme/types';
import { IBank } from '@/types/bank';
import { ICity } from '@/types/city';
import { getCurrentBanks } from '@/utils/getCurrentBanks';

export class BankCardCC extends Component<CommonBankCardCCType, IBankCardState> {
  constructor(props: CommonBankCardCCType) {
    super(props);
    this.state = {
      selectedBank: null,
      selectedCity: {
        id: 5,
        city: 'Minsk',
        longitude: 27.56152,
        latitude: 53.90454,
      },
      viewState: {
        longitude: 27.56152,
        latitude: 53.90454,
        zoom: 10,
      },
    };
  }

  componentDidMount() {
    this.fetchBanks();
  }

  componentDidUpdate(prevProps: CommonBankCardCCType, prevState: IBankCardState) {
    if (prevState.selectedCity !== this.state.selectedCity) {
      this.fetchBanks();
    }
  }

  fetchBanks = () => {
    const { fetchBanksOfCitiesThunk } = this.props;

    if (this.state.selectedCity) {
      fetchBanksOfCitiesThunk(this.state.selectedCity);
    }
  };

  onClickButton = (city: ICity) => {
    this.setState(prevState => ({
      viewState: {
        ...prevState.viewState,
        latitude: city.latitude,
        longitude: city.longitude,
      },
      selectedCity: city,
    }));
    this.props.setSearchCurrency('');
  };

  onSearch = (searchValue: string) => {
    this.props.setSearchCurrency(searchValue);
  };

  onChangeViewState = (viewState: ViewState) => {
    const { setSearchCurrency } = this.props;

    this.setState(prevState => ({
      viewState: {
        ...prevState.viewState,
        viewState,
      },
    }));
    setSearchCurrency('');
  };

  onChangeSelectedBank = (bank: IBank | null) => {
    this.setState({
      selectedBank: bank,
    });
  };

  render() {
    const { theme, banks, errorMap, searchCurrency } = this.props;

    const mapStyle =
      theme === themeEnum.Dark
        ? 'mapbox://styles/mapbox/navigation-night-v1'
        : 'mapbox://styles/mapbox/navigation-day-v1';

    const currentBanks = getCurrentBanks(banks, searchCurrency);

    if (errorMap) {
      return <ErrorInfo />;
    }

    return (
      <Container>
        <ButtonBlock>
          {cities.map(city => {
            return (
              <Button
                key={city.id}
                title={city.city}
                callBack={() => this.onClickButton(city)}
              />
            );
          })}
        </ButtonBlock>
        <Search onSearch={this.onSearch} />;
        <Map
          {...this.state.viewState}
          mapStyle={mapStyle}
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          attributionControl={false}
          onMove={(evt: ViewStateChangeEvent) => this.onChangeViewState(evt.viewState)}
          style={{ height: '60vh', width: '100vw' }}
        >
          <MarkerControl
            currentBanks={currentBanks}
            selectedBank={this.state.selectedBank}
            setSelectedBank={bank => this.onChangeSelectedBank(bank)}
          />
        </Map>
      </Container>
    );
  }
}
