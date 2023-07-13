import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${props => props.theme.valueInPercent.pr100};
  height: ${props => props.theme.valueInVh.vh60};
`;

export const PageNotFoundImg = styled.img`
  width: ${props => props.theme.valueInPercent.pr100};
  height: ${props => props.theme.valueInPercent.pr100};
  background-size: contain;
`;
