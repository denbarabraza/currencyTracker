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
import { setModalStatus } from '@/store/actions/appActions';
import { setCurrencyFrom } from '@/store/actions/homeActions';

export const CurrencyCard: FC<ICurrencyCard> = memo(
  ({ currencies, currencyForValue }) => {
    const dispatch = useAppDispatch();
    const onClickCurrencyItemHandler = (currency: string) => () => {
      dispatch(setCurrencyFrom(currency));
      dispatch(setModalStatus(true));
    };

    return (
      <ItemBlock data-cy='currencyCard' data-testid='currencyCard'>
        {currencies.map(({ name, code, img }) => {
          return (
            <CurrencyItem
              key={code}
              onClick={onClickCurrencyItemHandler(name)}
              data-cy='currencyItem'
            >
              <CurrencyImage src={img} alt={name} />
              <CurrencyInfo>
                <CardTitle data-cy='currencyTitle'>{name}</CardTitle>
                {currencyForValue && (
                  <CardInfo>{currencyForValue?.data[code].value}</CardInfo>
                )}
              </CurrencyInfo>
            </CurrencyItem>
          );
        })}
      </ItemBlock>
    );
  },
);
