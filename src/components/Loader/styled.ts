import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: ${props => props.theme.valueInPx.px0};
  left: ${props => props.theme.valueInPx.px0};

  width: ${props => props.theme.valueInVw.vw100};
  height: ${props => props.theme.valueInVh.vh100};

  opacity: 0.7;
  background-color: ${props => props.theme.colors.mainBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${props => props.theme.valueInPercent.pr100};
  height: ${props => props.theme.valueInPercent.pr100};
`;

export const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: ${props => props.theme.valueInPercent.pr10};
  height: ${props => props.theme.valueInPercent.pr10};
  border: 2px solid ${props => props.theme.usedColors.green};
  border-top-color: ${props => props.theme.usedColors.grayMoreOpacity};
  border-radius: ${props => props.theme.valueInPercent.pr50};
  animation: ${spin} 1s ease-in-out infinite;
`;
