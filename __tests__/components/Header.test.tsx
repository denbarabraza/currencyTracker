import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';

import { Header } from '@/components/Header';
import { Theme } from '@/components/Theme';
import { PATH } from '@/constants/path';
import { Contacts } from '@/pages/Contacts';
import { store } from '@/store/store';

describe('Header', () => {
  it('renders navigation links', () => {
    const { getByText, getByRole } = render(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <Theme>
            <Header />
          </Theme>
        </Provider>
      </MemoryRouter>,
    );

    expect(getByText('Home')).toHaveAttribute('href', PATH.HOME);
    expect(getByText('Timeline')).toHaveAttribute('href', PATH.TIME_LINE);
    expect(getByText('Bank card')).toHaveAttribute('href', PATH.BANK_CARD);
    expect(getByText('Contacts')).toHaveAttribute('href', PATH.CONTACTS);
    expect(getByRole('checkbox')).toBeInTheDocument();
  });
  it('opens Contacts when "Contacts" link is clicked', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[PATH.CONTACTS]}>
        <Provider store={store}>
          <Theme>
            <Header />
            <Contacts />
          </Theme>
        </Provider>
      </MemoryRouter>,
    );

    expect(getByText('Contacts US')).toBeInTheDocument();
  });
});
