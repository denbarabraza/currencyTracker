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
  const { HOME, TIME_LINE, BANK_CARD, CONTACTS } = PATH;

  return (
    <Container data-cy='header'>
      <Wrapper>
        <HeaderNav>
          <LogoHeader alt='logoHeader' src={logoHeader} title='logoHeader' />
          <NavLinkItem to={HOME}>Home</NavLinkItem>
          <NavLinkItem to={TIME_LINE}>Timeline</NavLinkItem>
          <NavLinkItem to={BANK_CARD}>Bank card</NavLinkItem>
          <NavLinkItem to={CONTACTS}>Contacts</NavLinkItem>
          <ThemeToggle />
        </HeaderNav>
      </Wrapper>
    </Container>
  );
};
