import { Provider } from 'react-redux';
import { fireEvent, render, within } from '@testing-library/react';

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

  it('the page should have buttons with the ability to select a city, a search field and a map', () => {
    const { getByRole, getByTestId } = render(
      <Provider store={store}>
        <Theme>
          <BankCard
            theme={themeEnum.Light}
            banks={mockBanks}
            errorMap={null}
            searchCurrency=''
            geo={geo}
            setSearchCurrency={mockSetSearchCurrency}
            fetchBanksOfCitiesThunk={mockFetchBanksOfCitiesThunk}
            fetchGeoThunk={mockGeoThunk}
          />
        </Theme>
      </Provider>,
    );

    const cityButton = getByRole('button', { name: /brest/i });
    const searchInput = getByRole('textbox');
    const map = getByTestId('map');

    expect(cityButton).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(map).toBeInTheDocument();
  });

  it('after clicking on the button with the name of the city, the city should be selected and a request sent', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Theme>
          <BankCard
            theme={themeEnum.Light}
            banks={mockBanks}
            errorMap={null}
            searchCurrency=''
            geo={geo}
            setSearchCurrency={mockSetSearchCurrency}
            fetchBanksOfCitiesThunk={mockFetchBanksOfCitiesThunk}
            fetchGeoThunk={mockGeoThunk}
          />
        </Theme>
      </Provider>,
    );

    const cityButton = getByRole('button', { name: /brest/i });

    expect(cityButton).toBeInTheDocument();
    fireEvent.click(cityButton);

    expect(mockFetchBanksOfCitiesThunk).toHaveBeenCalledWith(geo);
  });

  it('after entering the text and clicking on the "search" icon, the data should be sent', () => {
    const { getByRole, getByAltText } = render(
      <Provider store={store}>
        <Theme>
          <Search onSearch={searchMock} />
        </Theme>
      </Provider>,
    );
    const searchInput = getByRole('textbox');
    const searchButton = getByAltText(/search icon/i);
    const query = 'usd';

    fireEvent.change(searchInput, { target: { value: query } });
    fireEvent.click(searchButton);
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(searchMock).toHaveBeenCalledWith(query);
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
          <BankCard
            theme={themeEnum.Light}
            banks={mockBanks}
            errorMap='error'
            searchCurrency=''
            geo={geo}
            setSearchCurrency={mockSetSearchCurrency}
            fetchBanksOfCitiesThunk={mockFetchBanksOfCitiesThunk}
            fetchGeoThunk={mockGeoThunk}
          />
        </Theme>
      </Provider>,
    );

    const error = 'Ops, something went wrong...error';
    const errorComponent = getByText(error);

    expect(errorComponent).toBeInTheDocument();
  });
});
