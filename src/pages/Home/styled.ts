import styled, { keyframes } from 'styled-components';

export const CurrencyBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.indentation.i20};
  margin-bottom: ${props => props.theme.indentation.i20};
`;
export const StocksBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.theme.valueInVw.vw35};
`;
export const TitleBlock = styled.div`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeight.light};
  line-height: ${props => props.theme.valueInPx.px30};
  color: ${props => props.theme.colors.fontColor};
`;
export const HrItem = styled.hr`
  border: none;
  border-top: 2px solid ${props => props.theme.colors.currencyCard};
  margin: ${props => props.theme.indentation.i20} ${props => props.theme.indentation.i0};
`;

export const ItemBlock = styled.div`
  display: grid;
  cursor: pointer;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.indentation.i30};
  padding: ${props => props.theme.indentation.i20} ${props => props.theme.indentation.i0};
`;

const slideInFromBottom = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CurrencyItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.colors.currencyCard};
  border-radius: ${props => props.theme.valueInPx.px10};
  animation: ${slideInFromBottom} 0.5s ease-out;
  padding: ${props => props.theme.indentation.i0} ${props => props.theme.indentation.i10};

  &:hover {
    box-shadow: 0 2px 3px 2px ${props => props.theme.colors.boxShadow};
  }
`;

export const CurrencyImage = styled.img`
  width: ${props => props.theme.valueInPx.px50};
  height: ${props => props.theme.valueInPx.px50};
`;

export const CurrencyInfo = styled.div`
  padding: ${props => props.theme.indentation.i20};
`;

export const CardTitle = styled.div`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeight.normal};
`;

export const CardInfo = styled.div`
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeight.light};
  color: ${props => props.theme.colors.fontColorOpacity};
`;

export const QuotesBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
