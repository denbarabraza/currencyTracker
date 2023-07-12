import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import { ErrorInfo } from '@/components/ErrorInfo';
import { Search } from '@/components/Search';
import { Theme } from '@/components/Theme';
import { mockBanks } from '@/constants/mockBanks';
import { BankCard } from '@/pages/BankCard';
import { store } from '@/store/store';
import { themeEnum } from '@/theme/types';

describe('Search', () => {
  const geo = {
    latitude: 52.0975,
    longitude: 23.6877,
  };
  const mockFetchBanksOfCitiesThunk = jest.fn();
  const mockGeoThunk = jest.fn();
  const mockSetSearchCurrency = jest.fn();
  const searchMock = jest.fn();

  it('the elements of the BankCard page should be visible', () => {
    const { queryByTestId, getByRole } = render(
      <Provider store={store}>
        <Theme>
          <BankCard
            theme={themeEnum.Light}
            banks={mockBanks}
            searchCurrency='Bitcoin'
            geo={geo}
            setSearchCurrency={mockSetSearchCurrency}
            fetchBanksOfCitiesThunk={mockFetchBanksOfCitiesThunk}
            fetchGeoThunk={mockGeoThunk}
          />
        </Theme>
      </Provider>,
    );
    const map = queryByTestId('map');
    const searchInput = getByRole('textbox');

    expect(searchInput).toBeInTheDocument();
    expect(map).toBeInTheDocument();
  });

  it('hints should appear if the input value contains at least one character', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Theme>
          <Search onSearch={searchMock} />
        </Theme>
      </Provider>,
    );

    const searchInput = getByRole('textbox');

    fireEvent.change(searchInput, { target: { value: 'do' } });
    const hints = getByRole('list');

    expect(hints).toBeInTheDocument();
    fireEvent.change(searchInput, { target: { value: '' } });
    expect(hints).not.toBeInTheDocument();
  });

  it('if there is an error, the text should appear on the page', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Theme>
          <ErrorInfo error='error' />
        </Theme>
      </Provider>,
    );
    const error = 'Ops, something went wrong...error';
    const errorComponent = getByText(error);

    expect(errorComponent).toBeInTheDocument();
  });
});
