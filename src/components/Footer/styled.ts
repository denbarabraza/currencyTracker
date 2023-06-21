import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 18vh;
  top: 0;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
`;

export const InfoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90vw;
  height: 100%;
  flex-wrap: wrap;
  gap: 10px;
`;

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 480px;
  font-style: normal;
  font-weight: 300;
  color: #ffffff;
`;

export const DescriptionTitle = styled.div`
  font-weight: 400;
  margin-bottom: 20px;
`;

export const DescriptionItem = styled.div`
  color: rgba(255, 255, 255, 0.5);
  padding-bottom: 10px;

  &:hover {
    color: rgb(53, 185, 26);
  }
`;

export const DescriptionText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;
`;

export const LogoBlockFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  gap: 10px;
  margin-bottom: 20px;
`;

export const LogoIconFooter = styled.img`
  width: 25px;
  height: 25px;
`;

export const LogoTitleFooter = styled.img`
  height: 25px;
`;

export const RightsInfoBlock = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  padding: 10px;
  color: rgba(255, 255, 255, 0.5);

  @media (max-width: 420px) {
    font-size: 12px;
  }
`;
