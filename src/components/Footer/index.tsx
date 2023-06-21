import React from 'react';

import currencyTracker from '@/assets/image/currencyTracker.svg';
import logoHeader from '@/assets/image/logoHeader.svg';

import {
  AboutBlock,
  Container,
  DescriptionBlock,
  DescriptionItem,
  DescriptionText,
  DescriptionTitle,
  InfoFooterBlock,
  LogoBlockFooter,
  LogoIconFooter,
  LogoTitleFooter,
  RightsInfoBlock,
  Wrapper,
} from './styled';

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <InfoFooterBlock>
          <DescriptionBlock>
            <LogoBlockFooter>
              <LogoIconFooter alt='logoFooter' src={logoHeader} />
              <LogoTitleFooter alt='currencyTracker' src={currencyTracker} />
            </LogoBlockFooter>
            <DescriptionText>
              Since then, the company has grown organically to. Startup is the worlds
              largest trading platform, with $12 billion worth of currency trading and
              500,000 tickets sold daily to tens of thousands of traders worldwide.
            </DescriptionText>
          </DescriptionBlock>
          <AboutBlock>
            <DescriptionBlock>
              <DescriptionTitle>General</DescriptionTitle>
              <DescriptionItem>Market</DescriptionItem>
              <DescriptionItem>Service</DescriptionItem>
            </DescriptionBlock>
            <DescriptionBlock>
              <DescriptionTitle>Product</DescriptionTitle>
              <DescriptionItem>Sparks</DescriptionItem>
              <DescriptionItem>Snaps</DescriptionItem>
            </DescriptionBlock>
            <DescriptionBlock>
              <DescriptionTitle>Community</DescriptionTitle>
              <DescriptionItem>Ideas</DescriptionItem>
              <DescriptionItem>Streams</DescriptionItem>
            </DescriptionBlock>
          </AboutBlock>
        </InfoFooterBlock>
        <RightsInfoBlock>Startup © 2023-2024, All Rights Reserved</RightsInfoBlock>
      </Wrapper>
    </Container>
  );
};
