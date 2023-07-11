import React from 'react';

import { socialData } from '@/constants/socialData';
import {
  BlockSocialItem,
  ContactsItem,
  ContactsTitle,
  IconFooter,
} from '@/pages/Contacts/styled';

export const Contacts = () => {
  return (
    <div>
      <ContactsTitle>Contacts US</ContactsTitle>
      <ContactsItem>
        <b>E-mail:</b> contact@modsen-software.com
      </ContactsItem>
      <ContactsItem>
        <b>Phone:</b> +48501157180
      </ContactsItem>
      <ContactsItem>Stefana Okrzei 1a/10</ContactsItem>
      <ContactsItem>Warsaw, Poland</ContactsItem>
      <BlockSocialItem>
        {socialData.map(social => {
          const { id, href, img } = social;

          return (
            <a key={id} href={href} target='_blank' rel='noreferrer'>
              <IconFooter src={img} alt={href} title={href} />
            </a>
          );
        })}
      </BlockSocialItem>
    </div>
  );
};
