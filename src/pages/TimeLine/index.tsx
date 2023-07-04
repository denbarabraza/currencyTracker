import React from 'react';
import { CurrencySelect } from 'src/components/CurrencySelect';

import { BarChart } from '@/components/ChartComponent';
import { CurrencyCard } from '@/components/CurrencyCard';
import { DaySelect } from '@/components/DaySelect';
import { ErrorInfo } from '@/components/ErrorInfo';
import { PeriodToggle } from '@/components/PeriodToggle';
import { currencyQuotes } from '@/constants/currency';
import { CommonTimeLineCCType } from '@/pages/TimeLineContainer/types';
import { periodEnum } from '@/types/period';
import { dateControl } from '@/utils/dateControl';
import { getCodeCurrency } from '@/utils/getCodeCurrency';

import {
  Container,
  CurrencyFilterBlock,
  CurrencySelectBlock,
  HintsTimeLine,
} from './styled';

export class TimeLine extends React.PureComponent<CommonTimeLineCCType> {
  currencies = currencyQuotes.filter(
    currency => currency.name === this.props.currencyTimeLineName,
  );

  currenciesOptions = currencyQuotes.filter(
    currency => currency.name === 'Bitcoin' || currency.name === 'Ethereum',
  );

  code = getCodeCurrency(this.props.currencyTimeLineName);

  componentDidMount() {
    this.fetchCurrency();
  }

  componentDidUpdate(prevProps: CommonTimeLineCCType) {
    if (
      prevProps.selectedDay !== this.props.selectedDay ||
      prevProps.period !== this.props.period
    ) {
      this.fetchCurrency();
    }
    if (prevProps.currencyTimeLineName !== this.props.currencyTimeLineName) {
      this.code = getCodeCurrency(this.props.currencyTimeLineName);
    }
  }

  fetchCurrency = () => {
    const {
      selectedDay,
      period,
      fetchCurrencyDayOhlcvThunk,
      fetchCurrencyMonthOhlcvThunk,
    } = this.props;

    if (this.code && selectedDay) {
      fetchCurrencyDayOhlcvThunk(this.code, selectedDay);
    }

    if (this.code && period === periodEnum.Month) {
      const date = dateControl();
      const yearMonth = `${date.year}-${date.month}`;

      fetchCurrencyMonthOhlcvThunk(this.code, yearMonth);
    }
  };

  handleSelectChange = (currency: string) => {
    this.props.setCurrencyForTimeLine(currency);
    this.props.setDataForChart(null);
  };

  render() {
    const { code, currencies } = this;
    const { currencyTimeLineName, dataChar, period, errorCurrency } = this.props;

    if (errorCurrency) {
      return <ErrorInfo error={errorCurrency} />;
    }

    return (
      <Container>
        <CurrencySelectBlock>
          <HintsTimeLine>Select the currency that interests you</HintsTimeLine>
          <CurrencySelect
            options={this.currenciesOptions}
            value={currencyTimeLineName}
            onChange={this.handleSelectChange}
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
        {dataChar && code && <BarChart dataChart={dataChar} code={code} />}
      </Container>
    );
  }
}
