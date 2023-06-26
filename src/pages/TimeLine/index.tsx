import React from 'react';
import { CurrencySelect } from 'src/components/CurrencySelect';

import { CurrencyCard } from '@/components/CurrencyCard';
import { DaySelect } from '@/components/DaySelect';
import { PeriodToggle } from '@/components/PeriodToggle';
import { currencyQuotes } from '@/constants/currency';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
import { setCurrencyForTimeLine } from '@/store/actions/currencyActions';
import {
  getCurrencyForTimeLineSelector,
  getPeriodTimeLineSelector,
} from '@/store/selectors/currencySelectors';
import { PeriodEnum } from '@/types/period';

import {
  Container,
  CurrencyFilterBlock,
  CurrencySelectBlock,
  HintsTimeLine,
} from './styled';

export const TimeLine = () => {
  const dispatch = useAppDispatch();
  const currencyTimeLineName = useAppSelector(getCurrencyForTimeLineSelector);
  const period = useAppSelector(getPeriodTimeLineSelector);

  const currencies = currencyQuotes.filter(
    currency => currency.name === currencyTimeLineName,
  );
  const handleSelectChange = (value: string) => {
    dispatch(setCurrencyForTimeLine(value));
  };

  return (
    <Container>
      <CurrencySelectBlock>
        <HintsTimeLine>Select the currency that interests you</HintsTimeLine>
        <CurrencySelect
          options={currencyQuotes}
          value={currencyTimeLineName}
          onChange={handleSelectChange}
        />
      </CurrencySelectBlock>
      {currencyTimeLineName && (
        <CurrencyFilterBlock>
          <PeriodToggle period={period} />
          {period === PeriodEnum.Day && <DaySelect />}
          <CurrencyCard handleCurrencyClick={() => {}} currencies={currencies} />
        </CurrencyFilterBlock>
      )}
    </Container>
  );
};
