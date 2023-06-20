import React from 'react';

import logoHeader from '@/assets/image/logoHeader.svg';
import { Container, HeaderNav, LogoHeader, Wrapper } from '@/components/Header/styled';

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderNav>
          <LogoHeader alt='logoHeader' src={logoHeader} />
          <div>
            {/* <Link to={PATH.HOME}>Home</Link> */}
            Home
          </div>
          <div>Timeline</div>
          <div>Bank card</div>
          <div>Contato</div>
          <div>Toggle</div>
        </HeaderNav>
      </Wrapper>
    </Container>
  );
};
