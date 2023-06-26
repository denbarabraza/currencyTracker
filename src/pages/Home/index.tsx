import React, { useEffect } from 'react';
import { CurrencyModal } from 'src/components/Modal';

import { CurrencyCard } from '@/components/CurrencyCard';
import { ErrorInfo } from '@/components/ErrorInfo';
import { currencyQuotes, currencyStock } from '@/constants/currency';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
import {
  CardInfo,
  CardTitle,
  CurrencyBlock,
  CurrencyImage,
  CurrencyInfo,
  CurrencyItem,
  ItemBlock,
  QuotesBlock,
  StocksBlock,
  TitleBlock,
} from '@/pages/Home/styled';
import { setCurrencyFrom, setCurrencyTo } from '@/store/actions/currencyActions';
import {
  getCurrencyFromSelector,
  getCurrencySelector,
  getErrorCurrencySelector,
} from '@/store/selectors/currencySelectors';
import { fetchCurrencyThunk } from '@/store/thunks/currencyThunks';

export const Home = () => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(getCurrencySelector);
  const selectedCurrency = useAppSelector(getCurrencyFromSelector);
  const errorCurrency = useAppSelector(getErrorCurrencySelector);

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

  if (errorCurrency) {
    return <ErrorInfo />;
  }

  return (
    <CurrencyBlock>
      <StocksBlock>
        <TitleBlock>Stocks</TitleBlock>
        <ItemBlock>
          {currencyStock.map((curStock, index) => {
            return (
              <CurrencyItem key={index}>
                <CurrencyImage src={curStock.img} alt={curStock.name} />
                <CurrencyInfo>
                  <CardTitle>{curStock.name}</CardTitle>
                  <CardInfo>{curStock.value}</CardInfo>
                </CurrencyInfo>
              </CurrencyItem>
            );
          })}
        </ItemBlock>
      </StocksBlock>
      <QuotesBlock>
        <TitleBlock>Quotes</TitleBlock>
        <CurrencyCard
          currencies={currencyQuotes}
          currencyForValue={currency}
          handleCurrencyClick={currencyName => handleCurrencyClick(currencyName)}
        />
      </QuotesBlock>
      {selectedCurrency && (
        <CurrencyModal currency={selectedCurrency} isOpen onClose={handleCloseModal} />
      )}
    </CurrencyBlock>
  );
};
