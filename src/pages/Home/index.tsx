import React, { useEffect, useState } from 'react';
import { CurrencyModal } from 'src/components/Modal';

import { currencyQuotes, currencyStock } from '@/constants/currency';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
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
import { setCurrencyFrom, setCurrencyTo } from '@/store/actions/currencyActions';
import { fetchCurrencyThunk } from '@/store/reducers/currency/currencyReducer';
import {
  getCurrencyFromSelector,
  getCurrencySelector,
} from '@/store/selectors/currencySelectors';

export const Home = () => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(getCurrencySelector);
  const selectedCurrency = useAppSelector(getCurrencyFromSelector);

  const handleCurrencyClick = (currencyName: string) => {
    dispatch(setCurrencyFrom(currencyName));
  };

  const handleCloseModal = () => {
    dispatch(setCurrencyFrom(null));
    dispatch(setCurrencyTo(null));
  };

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
              <CurrencyCard
                key={index}
                onClick={() => handleCurrencyClick(curQuotes.name)}
              >
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
      {selectedCurrency && (
        <CurrencyModal currency={selectedCurrency} isOpen onClose={handleCloseModal} />
      )}
    </CurrencyBlock>
  );
};
