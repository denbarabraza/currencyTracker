import React from 'react';

import mainImage from '@/assets/image/mainImage.svg';
import { Pages } from '@/pages/Pages';

import { Container, MainIMG, UpdateInformation, Wrapper } from './styled';

export const Main = () => {
  return (
    <Container>
      <Wrapper>
        <MainIMG alt='mainImage' src={mainImage} />
        <UpdateInformation>Last updated at 11:59pm</UpdateInformation>
        <Pages />
      </Wrapper>
    </Container>
  );
};
