import React, { FC, useState } from 'react';

import { ICustomSelect } from '@/components/CurrencySelect/interface';
import { ICurrencyQuotes } from '@/types/ICurrency';

import { ArrowIcon, Container, Option, OptionsContainer, SelectedOption } from './styled';

export const CurrencySelect: FC<ICustomSelect> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(option => option.name === value);

  const handleSelectOption = (option: ICurrencyQuotes) => {
    onChange(option.name);
    setIsOpen(false);
  };

  return (
    <Container>
      <SelectedOption onClick={() => setIsOpen(!isOpen)}>
        {selectedOption?.name}
        <ArrowIcon className={isOpen ? 'open' : ''} />
      </SelectedOption>
      <OptionsContainer className={isOpen ? 'open' : ''}>
        {options.map(option => (
          <Option key={option.name} onClick={() => handleSelectOption(option)}>
            {option.name}
          </Option>
        ))}
      </OptionsContainer>
    </Container>
  );
};
