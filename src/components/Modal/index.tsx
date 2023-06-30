import React from 'react';
import { createPortal } from 'react-dom';

import { Currency } from '@/components/Currency';
import { currencyQuotes } from '@/constants/currency';

import { IModalProps } from './interface';
import { ModalContent, ModalItem } from './styled';

export const CurrencyModal: React.FC<IModalProps> = ({ currency, isOpen, onClose }) => {
  const currentCurrency = currencyQuotes.find(cur => cur.name === currency);

  return createPortal(
    <ModalItem isOpen={isOpen} onClick={onClose}>
      <ModalContent isOpen={isOpen} onClick={e => e.stopPropagation()}>
        {currentCurrency ? <Currency currentCurrency={currentCurrency} /> : null}
      </ModalContent>
    </ModalItem>,
    document.body,
  );
};
