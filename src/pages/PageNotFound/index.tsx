import React from 'react';

import pageNotFoundImg from '@/assets/image/pageNotFound.svg';
import { Container, PageNotFoundImg } from '@/pages/PageNotFound/style';

export const PageNotFound = () => {
  return (
    <Container>
      <PageNotFoundImg src={pageNotFoundImg} alt='PageNotFoundImg' />
    </Container>
  );
};
