import styled, { keyframes } from 'styled-components';

export const CurrencyBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;
export const StocksBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
`;
export const TitleBlock = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 30px;
  color: ${props => props.theme.colors.fontColor};

  &:after {
    transform: scaleX(1);
    content: '';
    display: block;
    max-width: 300px;
    height: 2px;
    background-color: ${props => props.theme.colors.currencyCard};
    bottom: 0;
    left: 0;
    transform-origin: left center;
    transition: transform 0.5s ease-in-out;
  }
`;

export const ItemBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px 0;
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

export const CurrencyCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.colors.currencyCard};
  border-radius: 10px;
  animation: ${slideInFromBottom} 0.5s ease-out;
  padding: 0 15px;

  &:hover {
    box-shadow: 0 2px 3px 2px ${props => props.theme.colors.boxShadow};
  }
`;

export const CurrencyImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const CurrencyInfo = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

export const CardInfo = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: ${props => props.theme.colors.fontColorOpacity};
`;

export const QuotesBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
