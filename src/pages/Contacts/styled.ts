import styled from 'styled-components';

export const ContactsTitle = styled.div`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeight.bold};
  margin-bottom: ${props => props.theme.indentation.i20};
`;

export const BlockSocialItem = styled.div`
  display: flex;
  gap: ${props => props.theme.indentation.i30};
  margin: ${props => props.theme.indentation.i20} ${props => props.theme.indentation.i0};
`;
export const IconFooter = styled.img`
  width: ${props => props.theme.valueInPx.px25};
  height: ${props => props.theme.valueInPx.px25};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }
`;
export const ContactsItem = styled.div`
  font-size: ${props => props.theme.fontSizes.l};
`;
