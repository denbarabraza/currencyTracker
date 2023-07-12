import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Currency } from '@/components/Currency';
import { currencyQuotes } from '@/constants/currency';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
import { setModalStatus } from '@/store/actions/appActions';
import { setCurrencyFrom, setCurrencyTo } from '@/store/actions/homeActions';
import { getModalStatusSelector } from '@/store/selectors/appSelectors';
import { getCurrencyFromSelector } from '@/store/selectors/homeSelectors';

import { ModalContent, ModalItem } from './styled';

export const CurrencyModal = () => {
  const dispatch = useAppDispatch();
  const selectedCurrency = useAppSelector(getCurrencyFromSelector);
  const isModalOpen = useAppSelector(getModalStatusSelector);
  const currentCurrency = currencyQuotes.find(cur => cur.name === selectedCurrency);

  const handleCloseModal = () => {
    dispatch(setModalStatus(false));
    dispatch(setCurrencyFrom(null));
    dispatch(setCurrencyTo(null));
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return createPortal(
    <ModalItem open={isModalOpen} onClick={handleCloseModal}>
      <ModalContent
        open={isModalOpen}
        onClick={event => event.stopPropagation()}
        data-cy='modalCurrency'
      >
        {currentCurrency ? <Currency currentCurrency={currentCurrency} /> : null}
      </ModalContent>
    </ModalItem>,
    document.body,
  );
};
