import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import { Theme } from '@/components/Theme';
import { TimeLine } from '@/pages/TimeLine';
import { store } from '@/store/store';
import { periodEnum } from '@/types/period';

describe('TimeLine', () => {
  const currencyTimeLineName = 'Bitcoin';
  const selectedDay = '2023-07-02';
  const period = periodEnum.Month;
  const dataChar = null;
  const mockFetchCurrencyDayOhlcvThunk = jest.fn();
  const mockFetchCurrencyMonthOhlcvThunk = jest.fn();
  const mockSetCurrencyForTimeLine = jest.fn();
  const mockSetDataForChart = jest.fn();

  it('initially, the page should display a currency selector, a date selector (if period=day) and a currency card', () => {
    const period = periodEnum.Day;

    const { queryByTestId } = render(
      <Provider store={store}>
        <Theme>
          <TimeLine
            currencyTimeLineName={currencyTimeLineName}
            period={period}
            selectedDay={selectedDay}
            dataChar={dataChar}
            setCurrencyForTimeLine={mockSetCurrencyForTimeLine}
            setDataForChart={mockSetDataForChart}
            fetchCurrencyDayOhlcvThunk={mockFetchCurrencyDayOhlcvThunk}
            fetchCurrencyMonthOhlcvThunk={mockFetchCurrencyMonthOhlcvThunk}
          />
        </Theme>
      </Provider>,
    );

    const currencySelect = queryByTestId('currencySelect');
    const periodToggle = queryByTestId('toggle');
    const daySelect = queryByTestId('daySelect');
    const currencyCard = queryByTestId('currencyCard');

    expect(currencySelect).toBeInTheDocument();
    expect(periodToggle).toBeInTheDocument();
    expect(daySelect).toBeInTheDocument();
    expect(currencyCard).toBeInTheDocument();
  });

  it('when clicking on toggle, the request should be sent', () => {
    const { getByRole, getAllByText } = render(
      <Provider store={store}>
        <Theme>
          <TimeLine
            currencyTimeLineName={currencyTimeLineName}
            period={period}
            selectedDay={selectedDay}
            dataChar={dataChar}
            setCurrencyForTimeLine={mockSetCurrencyForTimeLine}
            setDataForChart={mockSetDataForChart}
            fetchCurrencyDayOhlcvThunk={mockFetchCurrencyDayOhlcvThunk}
            fetchCurrencyMonthOhlcvThunk={mockFetchCurrencyMonthOhlcvThunk}
          />
        </Theme>
      </Provider>,
    );

    const currencyInPage = 'Bitcoin';
    const periodToggle = getByRole('checkbox');

    expect(periodToggle).toBeInTheDocument();
    fireEvent.click(periodToggle);
    expect(mockFetchCurrencyMonthOhlcvThunk).toHaveBeenCalledTimes(1);
    expect(getAllByText(currencyInPage).length).toBe(3);
    expect(getAllByText(currencyInPage)[0]).toBeInTheDocument();
  });

  it('the chart should be displayed if there is data to build', () => {
    const dataChar = [
      {
        price_close: 30592,
        price_high: 30647,
        price_low: 30321,
        price_open: 30469,
        time_close: '2023-07-01T23:58:46.1090000Z',
        time_open: '2023-07-01T00:00:12.7540000Z',
        time_period_end: '2023-07-02T00:00:00.0000000Z',
        time_period_start: '2023-07-01T00:00:00.0000000Z',
        trades_count: 8788,
        volume_traded: 603.9032895,
      },
    ];

    const { queryByTestId } = render(
      <Provider store={store}>
        <Theme>
          <TimeLine
            currencyTimeLineName={currencyTimeLineName}
            period={period}
            selectedDay={selectedDay}
            dataChar={dataChar}
            setCurrencyForTimeLine={mockSetCurrencyForTimeLine}
            setDataForChart={mockSetDataForChart}
            fetchCurrencyDayOhlcvThunk={mockFetchCurrencyDayOhlcvThunk}
            fetchCurrencyMonthOhlcvThunk={mockFetchCurrencyMonthOhlcvThunk}
          />
        </Theme>
      </Provider>,
    );

    const barChat = queryByTestId('barChat');

    expect(barChat).toBeInTheDocument();
  });
});
