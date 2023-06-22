import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 0;
  background-color: ${props => props.theme.colors.mainBackground};
`;
export const Wrapper = styled.div`
  width: 90vw;
  min-height: 75vh;
  padding: 10px 0;
  /*border: 2px solid #28f104;*/
`;

export const MainIMG = styled.img`
  width: 100%;
  background-size: contain;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const UpdateInformation = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 41px;
  color: ${props => props.theme.colors.fontColor};
  border: red;
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(53, 185, 26, 0.6);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(53, 185, 26, 0.2);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(53, 185, 26, 0);
  }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(53, 185, 26);
  box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
  animation: ${pulse} 2s infinite;
`;

export const DateBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 10px 0;
`;
