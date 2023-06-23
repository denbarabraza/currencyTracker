import React, { memo } from 'react';

import { Modal } from '@/components/Modal';

import { IModalProps } from './interface';

export const CurrencyModal: React.FC<IModalProps> = memo(
  ({ currency, isOpen, onClose }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        {currency}
      </Modal>
    );
  },
);
