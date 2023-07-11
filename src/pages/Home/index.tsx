import React, { useEffect } from 'react';

import { CurrencyCard } from '@/components/CurrencyCard';
import { ErrorInfo } from '@/components/ErrorInfo';
import { CurrencyModal } from '@/components/Modal';
import { currencyQuotes, currencyStock } from '@/constants/currency';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
import {
  CardInfo,
  CardTitle,
  CurrencyBlock,
  CurrencyImage,
  CurrencyInfo,
  CurrencyItem,
  HrItem,
  ItemBlock,
  QuotesBlock,
  StocksBlock,
  TitleBlock,
} from '@/pages/Home/styled';
import { setCurrencyFrom, setCurrencyTo } from '@/store/actions/homeActions';
import {
  getCurrencyFromSelector,
  getCurrencySelector,
  getErrorCurrencySelector,
} from '@/store/selectors/homeSelectors';
import { fetchCurrencyThunk } from '@/store/thunks/homeThunks';

export const Home = () => {
  const dispatch = useAppDispatch();
  const currency = useAppSelector(getCurrencySelector);
  const selectedCurrency = useAppSelector(getCurrencyFromSelector);
  const errorCurrency = useAppSelector(getErrorCurrencySelector);

  const handleCloseModal = () => {
    dispatch(setCurrencyFrom(null));
    dispatch(setCurrencyTo(null));
  };

  useEffect(() => {
    dispatch(fetchCurrencyThunk());
  }, []);

  if (errorCurrency) {
    return <ErrorInfo error={errorCurrency} />;
  }

  return (
    <CurrencyBlock>
      <StocksBlock>
        <TitleBlock>Stocks</TitleBlock>
        <HrItem />
        <ItemBlock>
          {currencyStock.map((curStock, index) => {
            const { value, img, name } = curStock;

            return (
              <CurrencyItem key={index}>
                <CurrencyImage src={img} alt={name} title={name} />
                <CurrencyInfo>
                  <CardTitle>{name}</CardTitle>
                  <CardInfo>{value}</CardInfo>
                </CurrencyInfo>
              </CurrencyItem>
            );
          })}
        </ItemBlock>
      </StocksBlock>
      <QuotesBlock>
        <TitleBlock>Quotes</TitleBlock>
        <HrItem />
        <CurrencyCard currencies={currencyQuotes} currencyForValue={currency} />
      </QuotesBlock>
      {selectedCurrency && (
        <CurrencyModal currency={selectedCurrency} isOpen onClose={handleCloseModal} />
      )}
    </CurrencyBlock>
  );
};
