import React, { FC, memo } from 'react';
import { Marker, Popup } from 'react-map-gl';

import location from '@/assets/image/location.svg';
import { IMarkerControl } from '@/components/MarkerControl/interface';
import {
  BankDescription,
  BankName,
  LocationImg,
  PopupBlock,
} from '@/components/MarkerControl/styled';

export const MarkerControl: FC<IMarkerControl> = memo(
  ({ currentBanks, selectedBank, setSelectedBank }) => {
    const onClosePopupHandler = () => {
      setSelectedBank(null);
    };

    return currentBanks?.map(bank => (
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
          title='location'
          onClick={e => {
            e.preventDefault();
            setSelectedBank(bank);
          }}
        />

        {selectedBank && (
          <Popup
            longitude={selectedBank.geocodes.main.longitude}
            latitude={selectedBank.geocodes.main.latitude}
            onClose={onClosePopupHandler}
            closeButton
            closeOnClick={false}
          >
            <PopupBlock>
              <BankName>{selectedBank.name}</BankName>
              <BankDescription>
                {selectedBank.location.formatted_address || selectedBank.location.address}
              </BankDescription>
              <BankDescription>
                {selectedBank.location && selectedBank.location.postcode}{' '}
                {selectedBank.timezone}
              </BankDescription>
            </PopupBlock>
          </Popup>
        )}
      </Marker>
    ));
  },
);
