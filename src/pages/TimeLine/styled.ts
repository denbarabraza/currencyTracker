import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: ${props => props.theme.indentation.i20} ${props => props.theme.indentation.i0};
  min-height: ${props => props.theme.valueInVh.vh30};
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
  font-size: ${props => props.theme.fontSizes.m};
  padding-bottom: ${props => props.theme.indentation.i10};
  color: ${props => props.theme.colors.toggleBorder};
`;
