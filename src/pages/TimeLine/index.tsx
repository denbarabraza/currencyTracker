import React, { useEffect } from 'react';
import { CurrencySelect } from 'src/components/CurrencySelect';

import { BarChart } from '@/components/ChartComponent';
import { CurrencyCard } from '@/components/CurrencyCard';
import { DaySelect } from '@/components/DaySelect';
import { ErrorInfo } from '@/components/ErrorInfo';
import { PeriodToggle } from '@/components/PeriodToggle';
import { currencyQuotes } from '@/constants/currency';
import { useAppDispatch, useAppSelector } from '@/hooks/useStoreControl';
import { setCurrencyForTimeLine, setDataForChart } from '@/store/actions/currencyActions';
import {
  getCurrencyForTimeLineSelector,
  getDataChartSelector,
  getDayTimeLineSelector,
  getErrorCurrencySelector,
  getPeriodTimeLineSelector,
} from '@/store/selectors/currencySelectors';
import {
  fetchCurrencyDayOhlcvThunk,
  fetchCurrencyMonthOhlcvThunk,
} from '@/store/thunks/currencyThunks';
import { periodEnum } from '@/types/period';
import { dateControl } from '@/utils/dateControl';
import { getCodeCurrency } from '@/utils/getCodeCurrency';

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
  const selectedDay = useAppSelector(getDayTimeLineSelector);
  const dataChart = useAppSelector(getDataChartSelector);
  const errorCurrency = useAppSelector(getErrorCurrencySelector);

  const currencies = currencyQuotes.filter(
    currency => currency.name === currencyTimeLineName,
  );
  const currenciesOptions = currencyQuotes.filter(
    currency => currency.name === 'Bitcoin' || currency.name === 'Ethereum',
  );
  const code = getCodeCurrency(currencyTimeLineName);
  const handleSelectChange = (currency: string) => {
    dispatch(setCurrencyForTimeLine(currency));
    dispatch(setDataForChart(null));
  };

  useEffect(() => {
    if (code && selectedDay) {
      dispatch(setDataForChart(null));
      dispatch(fetchCurrencyDayOhlcvThunk(code, selectedDay));
    }
    if (code && period === periodEnum.Month) {
      const date = dateControl();
      const yearMonth = `${date.year}-${date.month}`;

      dispatch(fetchCurrencyMonthOhlcvThunk(code, yearMonth));
    }
  }, [selectedDay, code, period]);

  if (errorCurrency) {
    return <ErrorInfo />;
  }

  return (
    <Container>
      <CurrencySelectBlock>
        <HintsTimeLine>Select the currency that interests you</HintsTimeLine>
        <CurrencySelect
          options={currenciesOptions}
          value={currencyTimeLineName}
          onChange={handleSelectChange}
        />
      </CurrencySelectBlock>
      <CurrencyFilterBlock>
        <PeriodToggle period={period} />
        {period === periodEnum.Day && (
          <>
            <HintsTimeLine>Select from which date to bring statistics</HintsTimeLine>
            <DaySelect />
          </>
        )}
        <CurrencyCard handleCurrencyClick={() => {}} currencies={currencies} />
      </CurrencyFilterBlock>
      {dataChart && code && <BarChart dataChart={dataChart} code={code} />}
    </Container>
  );
};
