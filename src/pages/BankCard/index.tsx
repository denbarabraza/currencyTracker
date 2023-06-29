import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl';

import location from '@/assets/image/location.svg';
import { banks, IBank } from '@/constants/banks';
import { useAppSelector } from '@/hooks/useStoreControl';
import { getThemeSelector } from '@/store/selectors/appSelectors';
import { ThemeEnum } from '@/types/themes';

import { BankDescription, BankName, Container, LocationImg, PopupBlock } from './styled';

export const BankCard = () => {
  const theme = useAppSelector(getThemeSelector);
  const [selectedBank, setSelectedBank] = useState<IBank | null>(null);

  const mapStyle =
    theme === ThemeEnum.Dark
      ? 'mapbox://styles/mapbox/navigation-night-v1'
      : 'mapbox://styles/mapbox/navigation-day-v1';

  return (
    <Container>
      <Map
        initialViewState={{
          longitude: 27.56152,
          latitude: 53.90454,
          zoom: 12,
          pitch: 25,
        }}
        mapStyle={mapStyle}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        attributionControl={false}
        style={{ height: '100vh', width: '100vw' }}
      >
        {banks.results.map(bank => (
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
