import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  margin: 10px 0;
  @media (max-width: 690px) {
    width: 100%;
    grid-area: 2 / 1 / 3 / 3;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
  }
`;
export const InputContainer = styled.div`
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const InputItem = styled.input`
  width: 400px;
  height: 100%;
  padding-left: 10px;
  transition: all 0.2s ease 0s;
  font-family: Poppins, sans-serif;
  font-size: 14px;
  line-height: 16px;
  border: 1px solid rgb(147, 146, 146);
  border-radius: 5px;

  &:focus {
    border: 1px solid #212121;
  }

  @media (max-width: 850px) {
    width: 250px;
  }
`;
