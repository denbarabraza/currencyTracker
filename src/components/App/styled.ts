import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fonts[0]};
    margin: ${props => props.theme.indentation.i0};
    padding: ${props => props.theme.indentation.i0};
    position: relative;
    box-sizing: border-box;


    &::-webkit-scrollbar {
      width: ${props => props.theme.valueInPx.px2};
    }

    &::-webkit-scrollbar-track {
      background-color: ${props => props.theme.usedColors.grayOpacity};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${props => props.theme.usedColors.grayMoreOpacity};
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${props => props.theme.usedColors.grayOpacity};
    }
  }
`;

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.fontColor};
`;
