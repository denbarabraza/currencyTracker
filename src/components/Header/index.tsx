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
import { navLinks } from '@/constants/navLinks';

export const Header = () => {
  return (
    <Container data-cy='header'>
      <Wrapper>
        <HeaderNav>
          <LogoHeader alt='logoHeader' src={logoHeader} title='logoHeader' />
          {navLinks.map(link => (
            <NavLinkItem key={link.to} to={link.to}>
              {link.label}
            </NavLinkItem>
          ))}
          <ThemeToggle />
        </HeaderNav>
      </Wrapper>
    </Container>
  );
};
