import React, { useEffect } from 'react';

import { currencyQuotes, currencyStock } from '@/constants/currency';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  CardInfo,
  CardTitle,
  CurrencyBlock,
  CurrencyCard,
  CurrencyImage,
  CurrencyInfo,
  ItemBlock,
  QuotesBlock,
  StocksBlock,
  TitleBlock,
} from '@/pages/Home/styled';
import { fetchCurrencyThunk } from '@/store/reducers/currency/currencyReducer';
import { getCurrencySelector } from '@/store/selectors/currencySelectors';

export const Home = () => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(getCurrencySelector);

  useEffect(() => {
    dispatch(fetchCurrencyThunk());
  }, []);

  return (
    <CurrencyBlock>
      <StocksBlock>
        <TitleBlock>Stocks</TitleBlock>
        <ItemBlock>
          {currencyStock.map((curStock, index) => {
            return (
              <CurrencyCard key={index}>
                <CurrencyImage src={curStock.img} alt={curStock.name} />
                <CurrencyInfo>
                  <CardTitle>{curStock.name}</CardTitle>
                  <CardInfo>{curStock.value}</CardInfo>
                </CurrencyInfo>
              </CurrencyCard>
            );
          })}
        </ItemBlock>
      </StocksBlock>
      <QuotesBlock>
        <TitleBlock>Quotes</TitleBlock>
        <ItemBlock>
          {currencyQuotes.map((curQuotes, index) => {
            return (
              <CurrencyCard key={index}>
                <CurrencyImage src={curQuotes.img} alt={curQuotes.name} />
                <CurrencyInfo>
                  <CardTitle>{curQuotes.name}</CardTitle>
                  <CardInfo>{currency?.data[curQuotes.code].value}</CardInfo>
                </CurrencyInfo>
              </CurrencyCard>
            );
          })}
        </ItemBlock>
      </QuotesBlock>
    </CurrencyBlock>
  );
};
