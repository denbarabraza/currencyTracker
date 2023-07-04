import styled from 'styled-components';

export const Container = styled.div`
  pointer-events: all;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  top: 10%;
  left: 0;
  transition: 0.4s;
  z-index: 3;
`;

export const PopUpItem = styled.div`
  width: 40vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  pointer-events: all;
  background-color: ${props => props.theme.colors.headFootBackground};
  transition: 0.4s;
`;
