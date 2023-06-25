import React, { useEffect } from 'react';
import { CurrencyModal } from 'src/components/Modal';

import { ErrorInfo } from '@/components/ErrorInfo';
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
