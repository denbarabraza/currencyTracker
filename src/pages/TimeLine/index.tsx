import React from 'react';

import { BarChart } from '@/components/ChartComponent';
import { CurrencyCard } from '@/components/CurrencyCard';
import { CurrencySelect } from '@/components/CurrencySelect';
import { DaySelect } from '@/components/DaySelect';
import { PeriodToggle } from '@/components/PeriodToggle';
import {
  ICommonTimeLine,
  ICommonTimeLineContainer,
  ITimeLineState,
} from '@/components/TimeLineContainer/interface';
import { currencyQuotes } from '@/constants/currency';
import { periodEnum } from '@/types/period';
import { dateControl } from '@/utils/dateControl';
import { getCodeCurrency } from '@/utils/getCodeCurrency';
import { getSelectedCurrency } from '@/utils/getSelectedCurrency';

import {
  Container,
  CurrencyFilterBlock,
  CurrencySelectBlock,
  HintsTimeLine,
} from './styled';

export class TimeLine extends React.PureComponent<ICommonTimeLine, ITimeLineState> {
  currenciesOptions = currencyQuotes.filter(
    currency => currency.name === 'Bitcoin' || currency.name === 'Ethereum',
  );

  constructor(props: ICommonTimeLine) {
    super(props);
    this.state = {
      code: getCodeCurrency(this.props.currencyTimeLineName),
      selectCurrency: getSelectedCurrency(this.props.currencyTimeLineName),
    };
  }

  componentDidMount() {
    this.fetchCurrency();
  }

  componentDidUpdate(prevProps: ICommonTimeLineContainer) {
    if (
      prevProps.selectedDay !== this.props.selectedDay ||
      prevProps.period !== this.props.period
    ) {
      this.fetchCurrency();
    }
    if (prevProps.currencyTimeLineName !== this.props.currencyTimeLineName) {
      this.setState({
        code: getCodeCurrency(this.props.currencyTimeLineName),
        selectCurrency: getSelectedCurrency(this.props.currencyTimeLineName),
      });
    }
  }

  fetchCurrency = () => {
    const {
      selectedDay,
      period,
      fetchCurrencyDayOhlcvThunk,
      fetchCurrencyMonthOhlcvThunk,
    } = this.props;

    if (this.state.code && selectedDay) {
      fetchCurrencyDayOhlcvThunk(this.state.code, selectedDay);
    }

    if (this.state.code && period === periodEnum.Month) {
      const date = dateControl(period);
      const timeStartMonth = `${date.year}-${date.month}-${date.day}`;

      fetchCurrencyMonthOhlcvThunk(this.state.code, timeStartMonth);
    }
  };

  handleSelectChange = (currency: string) => {
    this.props.setCurrencyForTimeLine(currency);
    this.props.setDataForChart(null);
  };

  render() {
    const { code } = this.state;
    const { currencyTimeLineName, dataChar, period } = this.props;

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
          <CurrencyCard currencies={this.state.selectCurrency} />
        </CurrencyFilterBlock>
        {dataChar && code && <BarChart dataChart={dataChar} code={code} />}
      </Container>
    );
  }
}
