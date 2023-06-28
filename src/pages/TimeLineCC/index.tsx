/*
import React from 'react';
import { CurrencySelect } from 'src/components/CurrencySelect';

import { BarChart } from '@/components/ChartComponent';
import { CurrencyCard } from '@/components/CurrencyCard';
import { DaySelect } from '@/components/DaySelect';
import { PeriodToggle } from '@/components/PeriodToggle';
import { currencyQuotes } from '@/constants/currency';
import { CommonTimeLineCCType } from '@/pages/TimeLineContainer';
import { PeriodEnum } from '@/types/period';
import { dateControl } from '@/utils/dateControl';
import { getCodeCurrency } from '@/utils/getCodeCurrency';

import {
  Container,
  CurrencyFilterBlock,
  CurrencySelectBlock,
  HintsTimeLine,
} from './styled';

export class TimeLineCC extends React.Component<CommonTimeLineCCType> {
  currencies = currencyQuotes.filter(
    currency => currency.name === props.currencyTimeLineName,
  );

  code = getCodeCurrency(this.props.currencyTimeLineName);

  componentDidMount() {
    const { code, props } = this;

    if (code && props.selectedDay) {
      props.fetchCurrencyDayOhlcvThunk(code, props.selectedDay);
    }

    if (code && props.period === PeriodEnum.Month) {
      const date = dateControl();
      const yearMonth = `${date.year}-${date.month}`;

      props.fetchCurrencyMonthOhlcvThunk(code, yearMonth);
    }
  }

  handleSelectChange = (currency: string) => {
    this.props.setCurrencyForTimeLine(currency);
    this.props.setDataForChart(null);
  };

  render() {
    const { code, currencies } = this;
    const { currencyTimeLineName, dataChart, period, selectedDay } = this.props;

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
          <>
            <CurrencyFilterBlock>
              <PeriodToggle period={period} />
              {period === PeriodEnum.Day && (
                <>
                  <HintsTimeLine>
                    Select from which date to bring statistics
                  </HintsTimeLine>
                  <DaySelect />
                </>
              )}
              <CurrencyCard handleCurrencyClick={() => {}} currencies={currencies} />
            </CurrencyFilterBlock>
            {dataChart && code && <BarChart dataChart={dataChart} code={code} />}
          </>
        )}
      </Container>
    );
  }
}
*/
