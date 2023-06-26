import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  width: 100%;
  background-color: #ffffff;
  @media (max-width: 600px) {
    transform: rotate(90deg);
  }
`;
