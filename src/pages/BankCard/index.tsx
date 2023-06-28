import React, { useState } from 'react';
import Map, { FullscreenControl, Marker } from 'react-map-gl';

import location from '@/assets/image/location.svg';
import { banks } from '@/constants/banks';

import { Container, LocationImg } from './styled';

export const BankCard = () => {
  const [selectedBank, setSelectedBank] = useState(null);

  return (
    <Container>
      <Map
        initialViewState={{
          longitude: 27.56152,
          latitude: 53.90454,
          zoom: 10,
          pitch: 55,
        }}
        mapStyle='mapbox://styles/mapbox/navigation-day-v1'
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        attributionControl={false}
        style={{ height: '35vh', width: '100%' }}
      >
        {banks.results.map(bank => (
          <Marker
            key={bank.fsq_id}
            longitude={bank.geocodes.main.longitude}
            latitude={bank.geocodes.main.latitude}
            anchor='center'
            pitchAlignment='viewport'
          >
            <LocationImg src={location} alt='location' />
          </Marker>
        ))}
      </Map>
    </Container>
  );
};
