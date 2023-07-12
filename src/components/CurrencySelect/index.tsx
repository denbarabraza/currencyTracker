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

  const onClickSelectedOption = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container data-testid='currencySelect' data-cy='currencySelect'>
      <SelectedOption onClick={onClickSelectedOption} data-cy='selectOptions'>
        {selectedOption?.name}
        <ArrowIcon open={isOpen} />
      </SelectedOption>
      <OptionsContainer open={isOpen} data-cy='selectOption'>
        {options.map(option => (
          <Option key={option.name} onClick={() => handleSelectOption(option)}>
            {option.name}
          </Option>
        ))}
      </OptionsContainer>
    </Container>
  );
};
