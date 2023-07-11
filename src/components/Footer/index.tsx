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
  const descriptionFooterData = [
    {
      title: 'General',
      items: ['Market', 'Service'],
    },
    {
      title: 'Product',
      items: ['Sparks', 'Snaps'],
    },
    {
      title: 'Community',
      items: ['Ideas', 'Streams'],
    },
  ];

  return (
    <Container data-cy='footer'>
      <Wrapper>
        <InfoFooterBlock>
          <DescriptionBlock>
            <LogoBlockFooter>
              <LogoIconFooter alt='logoFooter' src={logoHeader} title='logoFooter' />
              <LogoTitleFooter
                alt='currencyTracker'
                src={currencyTracker}
                title='currencyTracker'
              />
            </LogoBlockFooter>
            <DescriptionText>
              Since then, the company has grown organically to. Startup is the worlds
              largest trading platform, with $12 billion worth of currency trading and
              500,000 tickets sold daily to tens of thousands of traders worldwide.
            </DescriptionText>
          </DescriptionBlock>
          <AboutBlock>
            {descriptionFooterData.map(data => {
              const { items, title } = data;

              return (
                <DescriptionBlock key={title}>
                  <DescriptionTitle>{title}</DescriptionTitle>
                  {items.map(item => (
                    <DescriptionItem key={item}>{item}</DescriptionItem>
                  ))}
                </DescriptionBlock>
              );
            })}
          </AboutBlock>
        </InfoFooterBlock>
        <RightsInfoBlock>Startup © 2023-2024, All Rights Reserved</RightsInfoBlock>;
      </Wrapper>
    </Container>
  );
};
