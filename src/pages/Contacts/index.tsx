import React from 'react';

import { ContactsItem, ContactsTitle } from '@/pages/Contacts/styled';

import { BlockSocial } from './BlockSocial';

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
      <BlockSocial />
    </div>
  );
};
