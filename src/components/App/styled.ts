import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Poppins, sans-serif;;
    margin: 0;
    padding: 0;
    position: relative;
    box-sizing: border-box;
  }
`;

export const Container = styled.div`
  background-color: #000000;
  color: #ffffff;
`;
