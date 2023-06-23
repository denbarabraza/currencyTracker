import React from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Loader } from '@/components/Loader';
import { Main } from '@/components/Main';
import { Theme } from '@/context';
import { useAppSelector } from '@/hooks/useStoreControl';
import { RequestStatusType } from '@/store/reducers/app/types';
import { getStatusSelector } from '@/store/selectors/appSelectors';

import { Container, GlobalStyles } from './styled';

export const App = () => {
  const status = useAppSelector(getStatusSelector);

  return (
    <Theme>
      {status === RequestStatusType.Loading && <Loader />}
      <Container>
        <GlobalStyles />
        <Header />
        <Main />
        <Footer />
      </Container>
    </Theme>
  );
};
