import styled from 'styled-components';

export const ContactsTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const BlockSocialItem = styled.div`
  display: flex;
  gap: 30px;
  margin: 20px 0;
`;
export const IconFooter = styled.img`
  width: 25px;
  height: 25px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }
`;
export const ContactsItem = styled.div`
  font-size: 16px;
`;
