import React from 'react';

import { IModalProps } from './interface';
import { ModalContent, ModalItem } from './styled';

export const CurrencyModal: React.FC<IModalProps> = ({ currency, isOpen, onClose }) => {
  return (
    <ModalItem isOpen={isOpen} onClick={onClose}>
      <ModalContent isOpen={isOpen} onClick={e => e.stopPropagation()}>
        {currency}
      </ModalContent>
    </ModalItem>
  );
};
