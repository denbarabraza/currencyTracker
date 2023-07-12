import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Poppins, sans-serif;
    margin: ${props => props.theme.indentation.i0};
    padding: ${props => props.theme.indentation.i0};
    position: relative;
    box-sizing: border-box;


    &::-webkit-scrollbar {
      width: 2px;
    }

    &::-webkit-scrollbar-track {
      background-color: rgb(242, 242, 242);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(204, 204, 204);
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: rgb(153, 153, 153);
    }
  }
`;

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.fontColor};
`;
