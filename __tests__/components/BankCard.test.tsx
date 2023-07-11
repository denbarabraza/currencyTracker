import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import { Search } from '@/components/Search';
import { Theme } from '@/components/Theme';
import { store } from '@/store/store';

describe('Search', () => {
  const geo = {
    latitude: 52.0975,
    longitude: 23.6877,
  };
  const mockFetchBanksOfCitiesThunk = jest.fn();
  const mockGeoThunk = jest.fn();
  const mockSetSearchCurrency = jest.fn();
  const searchMock = jest.fn();

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

  /* it('if there is an error, the text should appear on the page', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Theme>
          <BankCardContainer
            theme={themeEnum.Light}
            banks={mockBanks}
            searchCurrency=''
            geo={geo}
            errorMap=''
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
  }); */
});
