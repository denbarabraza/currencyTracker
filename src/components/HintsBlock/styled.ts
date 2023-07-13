import styled from 'styled-components';

export const HintsBlockContainer = styled.ul`
  position: absolute;
  top: ${props => props.theme.valueInPx.px45};
  width: ${props => props.theme.valueInPercent.pr100};
  max-height: ${props => props.theme.valueInVh.vh40};
  background-color: ${props => props.theme.colors.mainBackground};
  border-radius: ${props => props.theme.valueInPx.px5};
  border: 1px solid ${props => props.theme.usedColors.grayMoreOpacity};
  box-shadow: 0 2px 4px ${props => props.theme.usedColors.blackOpacity};
  list-style: none;
  padding: ${props => props.theme.valueInPx.px10};
  margin: ${props => props.theme.indentation.i0};
  overflow-y: auto;
  z-index: 5;

  ::-webkit-scrollbar {
    width: ${props => props.theme.valueInPx.px5};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.usedColors.grayMoreOpacity};
    border-radius: ${props => props.theme.valueInPx.px5};
  }

  @media (max-width: 602px) {
    width: ${props => props.theme.valueInPercent.pr70};
    margin-top: ${props => props.theme.indentation.i10};
  }
`;

export const HintItem = styled.li`
  padding: ${props => props.theme.indentation.i5};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.usedColors.green};
  }
`;

export const InfoItem = styled.div`
  color: ${props => props.theme.colors.fontColor};
  text-align: center;
  font-size: ${props => props.theme.fontSizes.l};
  width: ${props => props.theme.valueInPercent.pr100};
`;
