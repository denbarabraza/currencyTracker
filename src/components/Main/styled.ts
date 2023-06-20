import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: 0;
`;
export const Wrapper = styled.div`
  width: 90vw;
  min-height: 75vh;
  border: 2px solid #28f104;
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
  font-size: 25px;
  line-height: 41px;
  color: #ffffff;
  border: red;
`;
