import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => props.theme.valueInVh.vh50};
  width: ${props => props.theme.valueInPercent.pr100};
  background-color: ${props => props.theme.usedColors.lightGreen};
`;
