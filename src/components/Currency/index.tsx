import React, { FC, useEffect } from 'react';

import { ICurrency } from '@/components/Currency/interface';
import { CurrencySelect } from '@/components/CurrencySelect';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
import { setCurrencyTo } from '@/store/actions/homeActions';
import {
  getConverterValueSelector,
  getCurrencyFromSelector,
  getCurrencyToSelector,
} from '@/store/selectors/homeSelectors';
import { fetchConversionThunk } from '@/store/thunks/homeThunks';
import { filteredCurrency } from '@/utils/filteredCurrency';
import { getCodeCurrency } from '@/utils/getCodeCurrency';

import {
  Container,
  ConverterValueItem,
  CurrencyIMG,
  DescriptionItem,
  HintItem,
} from './styled';

export const Currency: FC<ICurrency> = ({ currentCurrency }) => {
  const dispatch = useAppDispatch();
  const currencyTo = useAppSelector(getCurrencyToSelector);
  const currencyFrom = useAppSelector(getCurrencyFromSelector);
  const convertValue = useAppSelector(getConverterValueSelector);

  const currencyForOption = filteredCurrency(currentCurrency);
  const codeCurrencyTo = getCodeCurrency(currencyTo);
  const codeCurrencyFrom = getCodeCurrency(currencyFrom);

  const handleSelectChange = (value: string) => {
    dispatch(setCurrencyTo(value));
  };

  useEffect(() => {
    if (codeCurrencyFrom && codeCurrencyTo) {
      dispatch(fetchConversionThunk(codeCurrencyFrom, codeCurrencyTo));
    }
  }, [currencyTo]);

  return (
    <Container>
      <CurrencyIMG
        src={currentCurrency.img}
        alt={currentCurrency.name}
        title={currentCurrency.name}
      />
      <DescriptionItem>
        <b>Name:</b> {currentCurrency.name}
      </DescriptionItem>
      <DescriptionItem>
        <b>Code:</b> {currentCurrency.code}
      </DescriptionItem>
      <DescriptionItem>
        <b>Symbol:</b> {currentCurrency.symbol_native}
      </DescriptionItem>
      <HintItem>
        You can find out the selected currency exchange rate relative to the{' '}
        {currentCurrency.name}
      </HintItem>
      <CurrencySelect
        options={currencyForOption}
        value={currencyTo}
        onChange={handleSelectChange}
      />
      {currencyTo && (
        <ConverterValueItem data-cy='modalConvertValue'>
          1 {currentCurrency.code} = {convertValue} {codeCurrencyTo}
        </ConverterValueItem>
      )}
    </Container>
  );
};
