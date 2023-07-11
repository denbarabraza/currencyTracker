import React from 'react';
import { createPortal } from 'react-dom';

import { Currency } from '@/components/Currency';
import { currencyQuotes } from '@/constants/currency';

import { IModalProps } from './interface';
import { ModalContent, ModalItem } from './styled';

export const CurrencyModal: React.FC<IModalProps> = ({ currency, isOpen, onClose }) => {
  const currentCurrency = currencyQuotes.find(cur => cur.name === currency);

  return createPortal(
    <ModalItem open={isOpen} onClick={onClose}>
      <ModalContent
        open={isOpen}
        onClick={event => event.stopPropagation()}
        data-cy='modalCurrency'
      >
        {currentCurrency ? <Currency currentCurrency={currentCurrency} /> : null}
      </ModalContent>
    </ModalItem>,
    document.body,
  );
};
