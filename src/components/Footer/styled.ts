import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 18vh;
  top: 0;
  background-color: ${props => props.theme.colors.headFootBackground};
  padding-top: 15px;
  box-shadow: 0 -4px 6px ${props => props.theme.colors.boxShadow};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90vw;
`;

export const InfoFooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90vw;
  height: 100%;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    @media (max-width: 505px) {
      gap: 0;
    }
  }
`;

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 480px;
  font-style: normal;
  font-weight: 300;
  color: ${props => props.theme.colors.fontColor};

  @media (max-width: 915px) {
    max-width: 370px;
  }

  @media (max-width: 790px) {
    max-width: 300px;
  }
`;

export const AboutBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  font-style: normal;
  font-weight: 300;
  color: ${props => props.theme.colors.fontColor};
`;

export const DescriptionTitle = styled.div`
  font-weight: 400;
  margin-bottom: 20px;
  font-size: 16px;

  @media (max-width: 590px) {
    font-size: 14px;
  }
`;

export const DescriptionItem = styled.div`
  color: ${props => props.theme.colors.fontColorOpacity};
  padding-bottom: 10px;
  font-size: 16px;

  &:hover {
    color: rgb(53, 185, 26);
    font-weight: 400;
  }

  @media (max-width: 590px) {
    font-size: 14px;
  }
`;

export const DescriptionText = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 150%;

  @media (max-width: 590px) {
    font-size: 14px;
  }
  @media (max-width: 505px) {
    display: none;
  }
`;

export const LogoBlockFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
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

  @media (max-width: 790px) {
    width: 35vw;
  }
  @media (max-width: 700px) {
    width: 50vw;
  }
  @media (max-width: 450px) {
    width: 60vw;
  }
`;

export const RightsInfoBlock = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  padding: 10px;
  color: ${props => props.theme.colors.fontColorOpacity};

  @media (max-width: 590px) {
    font-size: 14px;
  }
`;
