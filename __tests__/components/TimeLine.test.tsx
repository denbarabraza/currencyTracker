import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import { Theme } from '@/components/Theme';
import { TimeLine } from '@/pages/TimeLine';
import { store } from '@/store/store';
import { periodEnum } from '@/types/period';

describe('TimeLine', () => {
  it('renders BarChart component when date is selected or toggle is clicked', () => {
    const mockFetchCurrencyDayOhlcvThunk = jest.fn();
    const mockFetchCurrencyMonthOhlcvThunk = jest.fn();
    const mockSetCurrencyForTimeLine = jest.fn();
    const mockSetDataForChart = jest.fn();
    const currencyTimeLineName = 'Bitcoin';
    const selectedDay = '2023-07-02';
    const period = periodEnum.Month;
    const dataChar = null;
    const errorCurrency = null;

    const { queryByTestId, getByTestId, getByRole, getByText, getAllByText } = render(
      <Provider store={store}>
        <Theme>
          <TimeLine
            currencyTimeLineName={currencyTimeLineName}
            period={period}
            selectedDay={selectedDay}
            dataChar={dataChar}
            errorCurrency={errorCurrency}
            setCurrencyForTimeLine={mockSetCurrencyForTimeLine}
            setDataForChart={mockSetDataForChart}
            fetchCurrencyDayOhlcvThunk={mockFetchCurrencyDayOhlcvThunk}
            fetchCurrencyMonthOhlcvThunk={mockFetchCurrencyMonthOhlcvThunk}
          />
        </Theme>
      </Provider>,
    );

    const currencyToClick = 'Bitcoin';
    const periodToggle = getByRole('checkbox');

    expect(queryByTestId('barChat')).not.toBeInTheDocument();
    expect(periodToggle).toBeInTheDocument();
    fireEvent.click(periodToggle);
    expect(mockFetchCurrencyMonthOhlcvThunk).toHaveBeenCalledTimes(1);

    expect(getAllByText(currencyToClick).length).toBe(3);
    expect(getAllByText(currencyToClick)[0]).toBeInTheDocument();
  });
});
