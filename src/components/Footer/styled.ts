import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 18vh;
  top: 0;
  background-color: ${props => props.theme.colors.headFootBackground};
  padding-top: ${props => props.theme.indentation.i10};
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
  gap: ${props => props.theme.indentation.i10};

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: ${props => props.theme.indentation.i20};

    @media (max-width: 505px) {
      gap: ${props => props.theme.indentation.i0};
    }
  }
`;

export const DescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 480px;
  font-weight: ${props => props.theme.fontWeight.light};
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
  gap: ${props => props.theme.indentation.i50};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.light};
  color: ${props => props.theme.colors.fontColor};
`;

export const DescriptionTitle = styled.div`
  font-weight: ${props => props.theme.fontWeight.normal};
  margin-bottom: ${props => props.theme.indentation.i20};
  font-size: ${props => props.theme.fontSizes.l};

  @media (max-width: 590px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const DescriptionItem = styled.div`
  color: ${props => props.theme.colors.fontColorOpacity};
  padding-bottom: ${props => props.theme.indentation.i10};
  font-size: ${props => props.theme.fontSizes.l};

  &:hover {
    color: ${props => props.theme.usedColors.green};
    font-weight: ${props => props.theme.fontWeight.normal};
  }

  @media (max-width: 590px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const DescriptionText = styled.div`
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.light};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 150%;

  @media (max-width: 590px) {
    font-size: ${props => props.theme.fontSizes.m};
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
  gap: ${props => props.theme.indentation.i10};
  margin-bottom: ${props => props.theme.indentation.i20};
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
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.l};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.light};
  padding: ${props => props.theme.indentation.i10};
  color: ${props => props.theme.colors.fontColorOpacity};

  @media (max-width: 590px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;
