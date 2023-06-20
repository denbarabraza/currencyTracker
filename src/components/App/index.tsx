import React from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Main } from '@/components/Main';

import { Container, GlobalStyles } from './styled';

export const App = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};
