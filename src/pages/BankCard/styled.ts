import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  overflow: hidden;
`;

export const LocationImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const PopupBlock = styled.div`
  min-width: 150px;
  color: black;
`;

export const BankName = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const BankDescription = styled.div`
  font-weight: 300;
`;
