import React, { useEffect } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Loader } from '@/components/Loader';
import { Main } from '@/components/Main';
import { Theme } from '@/context';
import { useAppSelector } from '@/hooks/useAppSelector';
import { getStatusSelector } from '@/store/selectors/appSelectors';

import { Container, GlobalStyles } from './styled';

export const App = () => {
  const status = useAppSelector(getStatusSelector);

  return (
    <Theme>
      {status === 'loading' && <Loader />}
      <Container>
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
      </Container>
    </Theme>
  );
};
