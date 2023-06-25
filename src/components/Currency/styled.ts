import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CurrencyIMG = styled.img`
  margin-bottom: 20px;
`;

export const DescriptionItem = styled.div`
  font-family: Poppins, sans-serif;
`;

export const HintItem = styled.div`
  color: ${props => props.theme.colors.fontColorOpacity};
  margin: 20px 0;
  font-size: 16px;
`;

export const ConverterValueItem = styled.div`
  color: rgb(53, 185, 26);
  margin: 20px 0;
  font-size: 22px;
`;
