import React, { FC, useEffect } from 'react';

import { ICurrency } from '@/components/Currency/types';
import { CustomSelect } from '@/components/CustomSelect';
import { selectEnum } from '@/components/CustomSelect/interface';
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

  const descriptionItems = Object.entries(currentCurrency)
    .filter(([key]) => key === 'name' || key === 'symbol_native' || key === 'code')
    .map(([key, value]) => {
      const keyTitle = key.charAt(0).toUpperCase() + key.slice(1);

      return (
        <DescriptionItem key={key}>
          <b>{keyTitle}:</b> {value}
        </DescriptionItem>
      );
    });

  const { img, name, code } = currentCurrency;

  useEffect(() => {
    if (codeCurrencyFrom && codeCurrencyTo) {
      dispatch(fetchConversionThunk(codeCurrencyFrom, codeCurrencyTo));
    }
  }, [dispatch, codeCurrencyFrom, codeCurrencyTo]);

  return (
    <Container>
      <CurrencyIMG src={img} alt={name} title={name} />
      {descriptionItems}
      <HintItem>
        You can find out the selected currency exchange rate relative to the {name}
      </HintItem>
      <CustomSelect
        type={selectEnum.Currency}
        options={currencyForOption}
        value={currencyTo}
        onChange={handleSelectChange}
      />
      {currencyTo && (
        <ConverterValueItem data-cy='modalConvertValue'>
          1 {code} = {convertValue} {codeCurrencyTo}
        </ConverterValueItem>
      )}
    </Container>
  );
};
