import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 20px 0;
`;

export const CurrencySelectBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CurrencyFilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const HintsTimeLine = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
  color: ${props => props.theme.colors.toggleBorder};
`;
