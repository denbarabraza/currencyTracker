import React, { useEffect, useState } from 'react';
import Map, { ViewStateChangeEvent } from 'react-map-gl';

import { Button } from '@/components/Button/Button';
import { ButtonBlock } from '@/components/Button/styled';
import { ErrorInfo } from '@/components/ErrorInfo';
import { MarkerControl } from '@/components/MarkerControl';
import { Search } from '@/components/Search';
import { cities } from '@/constants/cities';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
import { setSearchCurrency } from '@/store/actions/mapActions';
import { getThemeSelector } from '@/store/selectors/appSelectors';
import {
  getBanksSelector,
  getErrorFromMap,
  getSearchCurrencySelector,
} from '@/store/selectors/mapSelectors';
import { fetchBanksOfCitiesThunk } from '@/store/thunks/mapThunks';
import { themeEnum } from '@/theme/types';
import { IBank } from '@/types/bank';
import { ICity } from '@/types/city';
import { getCurrentBanks } from '@/utils/getCurrentBanks';

import { Container } from './styled';

export const BankCard = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getThemeSelector);
  const banks = useAppSelector(getBanksSelector);
  const errorMap = useAppSelector(getErrorFromMap);
  const searchCurrency = useAppSelector(getSearchCurrencySelector);
  const [selectedBank, setSelectedBank] = useState<IBank | null>(null);
  const [selectedCity, setSelectedCity] = useState<ICity>({
    id: 5,
    city: 'Minsk',
    longitude: 27.56152,
    latitude: 53.90454,
  });
  const [viewState, setViewState] = useState({
    longitude: 27.56152,
    latitude: 53.90454,
    zoom: 10,
  });

  const mapStyle =
    theme === themeEnum.Dark
      ? 'mapbox://styles/mapbox/navigation-night-v1'
      : 'mapbox://styles/mapbox/navigation-day-v1';

  const onClickButton = (city: ICity) => {
    setViewState({ ...viewState, latitude: city.latitude, longitude: city.longitude });
    setSelectedCity(city);
    dispatch(setSearchCurrency(''));
  };

  const onSearch = (searchValue: string) => {
    dispatch(setSearchCurrency(searchValue));
  };

  const currentBanks = getCurrentBanks(banks, searchCurrency);

  useEffect(() => {
    if (selectedCity) {
      dispatch(fetchBanksOfCitiesThunk(selectedCity));
    }
  }, [selectedCity]);

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
              callBack={() => onClickButton(city)}
            />
          );
        })}
      </ButtonBlock>

      <Search onSearch={onSearch} />

      <Map
        {...viewState}
        mapStyle={mapStyle}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        attributionControl={false}
        onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
        style={{ height: '60vh', width: '100vw' }}
      >
        <MarkerControl
          currentBanks={currentBanks}
          selectedBank={selectedBank}
          setSelectedBank={bank => setSelectedBank(bank)}
        />
      </Map>
    </Container>
  );
};
