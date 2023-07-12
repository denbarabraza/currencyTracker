import styled from 'styled-components';

export const LocationImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const PopupBlock = styled.div`
  min-width: 150px;
  color: ${props => props.theme.usedColors.black};
`;

export const BankName = styled.div`
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeight.semibold};
  margin-bottom: ${props => props.theme.indentation.i10};
`;

export const BankDescription = styled.div`
  font-weight: ${props => props.theme.fontWeight.light};
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.sm};
`;
