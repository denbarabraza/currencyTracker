import React, { FC, memo } from 'react';

import { ICurrencyCard } from '@/components/CurrencyCard/interface';
import { useAppDispatch } from '@/hooks/useStoreControl';
import {
  CardInfo,
  CardTitle,
  CurrencyImage,
  CurrencyInfo,
  CurrencyItem,
  ItemBlock,
} from '@/pages/Home/styled';
import { setCurrencyFrom } from '@/store/actions/homeActions';

export const CurrencyCard: FC<ICurrencyCard> = memo(
  ({ currencies, currencyForValue }) => {
    const dispatch = useAppDispatch();
    const onClickCurrencyItemHandler = (currency: string) => {
      dispatch(setCurrencyFrom(currency));
    };

    return (
      <ItemBlock data-cy='currencyCard' data-testid='currencyCard'>
        {currencies.map((currency, index) => {
          return (
            <CurrencyItem
              key={index}
              onClick={() => onClickCurrencyItemHandler(currency.name)}
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
  },
);
