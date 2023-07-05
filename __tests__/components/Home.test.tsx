import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import { Theme } from '@/components/Theme';
import { currencyQuotes } from '@/constants/currency';
import { Home } from '@/pages/Home';
import { store } from '@/store/store';

describe('Home', () => {
  it('should currency to be in the document and this currency in opens CurrencyModal on currency click', () => {
    const { getAllByText, getByText } = render(
      <Provider store={store}>
        <Theme>
          <Home />
        </Theme>
      </Provider>,
    );

    const currencyToClick = currencyQuotes[0].name;

    expect(getByText(currencyToClick)).toBeInTheDocument();
    const currencyItem = getByText(currencyToClick);

    fireEvent.click(currencyItem);

    expect(getAllByText(currencyToClick).length).toBe(2);
    expect(getAllByText(currencyToClick)[0]).toBeInTheDocument();
  });
});
