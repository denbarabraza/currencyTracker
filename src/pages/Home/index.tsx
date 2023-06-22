import React from 'react';

import { currencyQuotes, currencyStock } from '@/constants/currency';
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

export const Home = () => {
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
                  <CardInfo>R$ 5,13</CardInfo>
                </CurrencyInfo>
              </CurrencyCard>
            );
          })}
        </ItemBlock>
      </QuotesBlock>
    </CurrencyBlock>
  );
};
