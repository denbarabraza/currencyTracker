import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const CurrencyIMG = styled.img`
  width: ${props => props.theme.valueInPx.px70};
  height: ${props => props.theme.valueInPx.px70};
  margin-bottom: ${props => props.theme.indentation.i20};
`;

export const DescriptionItem = styled.div`
  font-family: ${props => props.theme.fonts[0]};
`;

export const HintItem = styled.div`
  color: ${props => props.theme.colors.fontColorOpacity};
  margin: ${props => props.theme.indentation.i20} ${props => props.theme.indentation.i0};
  font-size: ${props => props.theme.fontSizes.l};
`;

export const ConverterValueItem = styled.div`
  color: ${props => props.theme.usedColors.green};
  margin: ${props => props.theme.indentation.i20} ${props => props.theme.indentation.i0};
  font-size: ${props => props.theme.fontSizes.xl};
`;
