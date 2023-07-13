import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
  margin: ${props => props.theme.indentation.i10} ${props => props.theme.indentation.i0};
  @media (max-width: 690px) {
    width: ${props => props.theme.valueInPercent.pr100};
    grid-area: 2 / 1 / 3 / 3;
    justify-content: center;
    align-items: center;
    padding-top: ${props => props.theme.indentation.i10};
  }
`;
export const InputContainer = styled.div`
  height: ${props => props.theme.valueInPx.px30};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const InputItem = styled.input`
  width: ${props => props.theme.valueInPx.px400};
  height: ${props => props.theme.valueInPercent.pr100};
  padding-left: ${props => props.theme.indentation.i10};
  transition: all 0.2s ease 0s;
  font-family: ${props => props.theme.fonts[0]};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.valueInPx.px20};
  border: 1px solid ${props => props.theme.usedColors.blackOpacity};
  border-radius: ${props => props.theme.valueInPx.px5};

  &:focus {
    border: 1px solid ${props => props.theme.usedColors.green};
  }

  @media (max-width: 850px) {
    width: ${props => props.theme.valueInPx.px250};
  }
`;
