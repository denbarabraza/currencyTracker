import React, { FC } from 'react';

import { ICurrencyCard } from '@/components/CurrencyCard/interface';
import {
  CardInfo,
  CardTitle,
  CurrencyImage,
  CurrencyInfo,
  CurrencyItem,
  ItemBlock,
} from '@/pages/Home/styled';

export const CurrencyCard: FC<ICurrencyCard> = ({
  currencies,
  currencyForValue,
  handleCurrencyClick,
}) => {
  return (
    <ItemBlock data-cy='currencyCard' data-testid='currencyCard'>
      {currencies.map((currency, index) => {
        return (
          <CurrencyItem
            key={index}
            onClick={() => handleCurrencyClick(currency.name)}
            data-cy='currencyItem'
          >
            <CurrencyImage src={currency.img} alt={currency.name} />
            <CurrencyInfo>
              <CardTitle data-cy='currencyTitle'>{currency.name}</CardTitle>
              {currencyForValue && (
                <CardInfo>{currencyForValue?.data[currency.code].value}</CardInfo>
              )}
            </CurrencyInfo>
          </CurrencyItem>
        );
      })}
    </ItemBlock>
  );
};
