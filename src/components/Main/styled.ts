import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  top: ${props => props.theme.valueInPx.px0};
  background-color: ${props => props.theme.colors.mainBackground};
`;
export const Wrapper = styled.div`
  width: ${props => props.theme.valueInVw.vw90};
  min-height: ${props => props.theme.valueInVh.vh75};
  padding: ${props => props.theme.indentation.i10} ${props => props.theme.indentation.i0};
`;

export const MainIMG = styled.img`
  width: ${props => props.theme.valueInPercent.pr100};
  background-size: contain;
  border-radius: ${props => props.theme.valueInPx.px5};
  margin-bottom: ${props => props.theme.indentation.i10};
`;

export const UpdateInformation = styled.div`
  text-align: center;
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.light};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.valueInPx.px40};
  color: ${props => props.theme.colors.fontColor};
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 ${props => props.theme.usedColors.greenOpacity};
  }
  70% {
    box-shadow: 0 0 0 10px rgba(53, 185, 26, 0.2);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(53, 185, 26, 0);
  }
`;

export const Circle = styled.div`
  width: ${props => props.theme.valueInPx.px20};
  height: ${props => props.theme.valueInPx.px20};
  border-radius: ${props => props.theme.valueInPercent.pr50};
  background-color: ${props => props.theme.usedColors.green};
  box-shadow: 0 0 0 0 ${props => props.theme.usedColors.blackOpacity};
  animation: ${pulse} 2s infinite;
`;

export const DateBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.indentation.i20};
  padding: ${props => props.theme.indentation.i10} ${props => props.theme.indentation.i0};
`;
