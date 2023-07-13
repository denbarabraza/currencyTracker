import React, { PureComponent } from 'react';
import Map, { ViewState, ViewStateChangeEvent } from 'react-map-gl';

import {
  IBankCardState,
  ICommonBankCard,
} from '@/components/BankCardContainer/interfaces';
import { MarkerControl } from '@/components/MarkerControl';
import { Search } from '@/components/Search';
import { Container } from '@/pages/BankCard/styled';
import { themeEnum } from '@/theme/types';
import { IBank } from '@/types/bank';
import { getCurrentBanks } from '@/utils/getCurrentBanks';

export class BankCard extends PureComponent<ICommonBankCard, IBankCardState> {
  constructor(props: ICommonBankCard) {
    super(props);
    const defaultLongitude = 27.56152;
    const defaultLatitude = 53.90454;

    this.state = {
      selectedBank: null,
      viewState: {
        longitude: this.props.geo ? this.props.geo.longitude : defaultLongitude,
        latitude: this.props.geo ? this.props.geo.latitude : defaultLatitude,
        zoom: 10,
      },
    };
  }

  componentDidMount() {
    this.fetchBanks();
  }

  componentDidUpdate(prevProps: ICommonBankCard) {
    if (prevProps.geo !== this.props.geo) {
      this.fetchBanks();
    }
  }

  fetchBanks = () => {
    const { fetchBanksOfCitiesThunk, geo, fetchGeoThunk } = this.props;

    if (!geo) {
      fetchGeoThunk();
    }

    if (geo) {
      this.setState(prevState => ({
        viewState: {
          ...prevState.viewState,
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
      }));

      fetchBanksOfCitiesThunk(geo);
    }
  };

  onSearch = (searchValue: string) => {
    this.props.setSearchCurrency(searchValue);
  };

  onChangeViewState = (viewState: ViewState) => {
    this.setState(prevState => ({
      viewState: {
        ...prevState.viewState,
        longitude: viewState.longitude,
        latitude: viewState.latitude,
        zoom: viewState.zoom,
      },
    }));
  };

  onChangeSelectedBank = (bank: IBank | null) => {
    this.setState({
      selectedBank: bank,
    });
  };

  render() {
    const { theme, banks, searchCurrency } = this.props;

    const currentBanks = getCurrentBanks(banks, searchCurrency);
    const mapStyle =
      theme === themeEnum.Dark
        ? 'mapbox://styles/mapbox/navigation-night-v1'
        : 'mapbox://styles/mapbox/navigation-day-v1';

    return (
      <Container data-cy='mapContainer' data-testid='map'>
        <Search onSearch={this.onSearch} />
        <Map
          data-testid='map'
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
