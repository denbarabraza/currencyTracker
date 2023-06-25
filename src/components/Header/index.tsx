import React from 'react';

import logoHeader from '@/assets/image/logoHeader.svg';
import {
  Container,
  HeaderNav,
  LogoHeader,
  NavLinkItem,
  Wrapper,
} from '@/components/Header/styled';
import { ThemeToggle } from '@/components/ThemeToggle';
import { PATH } from '@/constants/path';

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderNav>
          <LogoHeader alt='logoHeader' src={logoHeader} />
          <NavLinkItem to={PATH.HOME}>Home</NavLinkItem>
          <NavLinkItem to={PATH.TIME_LINE}>Timeline</NavLinkItem>
          <NavLinkItem to={PATH.BANK_CARD}>Bank card</NavLinkItem>
          <ThemeToggle />
        </HeaderNav>
      </Wrapper>
    </Container>
  );
};
