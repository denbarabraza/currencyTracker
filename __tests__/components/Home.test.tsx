import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import { ErrorInfo } from '@/components/ErrorInfo';
import { Theme } from '@/components/Theme';
import { currencyQuotes } from '@/constants/currency';
import { Home } from '@/pages/Home';
import { store } from '@/store/store';

describe('Home', () => {
  it('there should be a block with currency cards on the page', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <Theme>
          <Home />
        </Theme>
      </Provider>,
    );

    expect(queryByTestId('blockWithCurrency')).toBeInTheDocument();
  });

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
