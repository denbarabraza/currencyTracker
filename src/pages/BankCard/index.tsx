import React, { useEffect, useState } from 'react';
import Map, { Marker, Popup, ViewStateChangeEvent } from 'react-map-gl';

import location from '@/assets/image/location.svg';
import { Button } from '@/components/Button/Button';
import { ButtonBlock } from '@/components/Button/styled';
import { cities } from '@/constants/cities';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
import { getThemeSelector } from '@/store/selectors/appSelectors';
import { getBanksSelector } from '@/store/selectors/mapSelectors';
import { fetchBanksOfCitiesThunk } from '@/store/thunks/mapThunks';
import { IBank } from '@/types/IBank';
import { ICity } from '@/types/ICity';
import { ThemeEnum } from '@/types/themes';

import { BankDescription, BankName, Container, LocationImg, PopupBlock } from './styled';

export const BankCard = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getThemeSelector);
  const banks = useAppSelector(getBanksSelector);
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
    theme === ThemeEnum.Dark
      ? 'mapbox://styles/mapbox/navigation-night-v1'
      : 'mapbox://styles/mapbox/navigation-day-v1';

  const onClickButton = (city: ICity) => {
    setViewState({ ...viewState, latitude: city.latitude, longitude: city.longitude });
    setSelectedCity(city);
  };

  useEffect(() => {
    if (selectedCity) {
      dispatch(fetchBanksOfCitiesThunk(selectedCity.city));
    }
  }, [selectedCity]);

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

      <Map
        {...viewState}
        mapStyle={mapStyle}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        attributionControl={false}
        onMove={(evt: ViewStateChangeEvent) => setViewState(evt.viewState)}
        style={{ height: '60vh', width: '100vw' }}
      >
        {banks?.results.map(bank => (
          <Marker
            key={bank.fsq_id}
            longitude={bank.geocodes.main.longitude}
            latitude={bank.geocodes.main.latitude}
            anchor='center'
            pitchAlignment='viewport'
          >
            <LocationImg
              src={location}
              alt='location'
              onClick={e => {
                e.preventDefault();
                setSelectedBank(bank);
              }}
            />

            {selectedBank && (
              <Popup
                longitude={selectedBank.geocodes.main.longitude}
                latitude={selectedBank.geocodes.main.latitude}
                onClose={() => setSelectedBank(null)}
                closeButton
                closeOnClick={false}
              >
                <PopupBlock>
                  <BankName>{selectedBank.name}</BankName>
                  <BankDescription>
                    {selectedBank.location.formatted_address ||
                      selectedBank.location.address}
                  </BankDescription>
                  <BankDescription>
                    {selectedBank.location && selectedBank.location.postcode}{' '}
                    {selectedBank.timezone}
                  </BankDescription>
                </PopupBlock>
              </Popup>
            )}
          </Marker>
        ))}
      </Map>
    </Container>
  );
};
