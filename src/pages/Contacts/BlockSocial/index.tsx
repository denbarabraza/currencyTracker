import React from 'react';

import { socialData } from '@/constants/socialData';
import { BlockSocialItem, IconFooter } from '@/pages/Contacts/styled';

export const BlockSocial = () => {
  return (
    <BlockSocialItem>
      {socialData.map(social => {
        const { id, href, img } = social;

        return (
          <a key={id} href={href} target='_blank' rel='noreferrer'>
            <IconFooter src={img} />
          </a>
        );
      })}
    </BlockSocialItem>
  );
};
