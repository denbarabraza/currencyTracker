import React, { FC, useState } from 'react';

import { ICustomSelect } from '@/components/CurrencySelect/interface';
import { ICurrencyQuotes } from '@/types/currency';

import { ArrowIcon, Container, Option, OptionsContainer, SelectedOption } from './styled';

export const CurrencySelect: FC<ICustomSelect> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(option => option.name === value);

  const handleSelectOption = (option: ICurrencyQuotes) => {
    onChange(option.name);
    setIsOpen(false);
  };

  return (
    <Container data-testid='currencySelect' data-cy='currencySelect'>
      <SelectedOption onClick={() => setIsOpen(!isOpen)} data-cy='selectOptions'>
        {selectedOption?.name}
        <ArrowIcon className={isOpen ? 'open' : ''} />
      </SelectedOption>
      <OptionsContainer className={isOpen ? 'open' : ''} data-cy='selectOption'>
        {options.map(option => (
          <Option key={option.name} onClick={() => handleSelectOption(option)}>
            {option.name}
          </Option>
        ))}
      </OptionsContainer>
    </Container>
  );
};
