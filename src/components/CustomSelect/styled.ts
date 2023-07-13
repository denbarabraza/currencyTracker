import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: ${props => props.theme.valueInPx.px200};
  font-family: ${props => props.theme.fonts[0]};
`;

export const SelectedOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.indentation.i10};
  border: 1px solid ${props => props.theme.usedColors.grayMoreOpacity};
  border-radius: ${props => props.theme.valueInPx.px5};
  cursor: pointer;
  height: ${props => props.theme.valueInPx.px25};
`;

export const ArrowIcon = styled.div<{ open: boolean }>`
  width: ${props => props.theme.valueInPx.px0};
  height: ${props => props.theme.valueInPx.px0};
  border-top: 5px solid ${props => props.theme.colors.fontColor};
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  transition: transform 0.2s ease-in-out;

  transform: ${({ open }) => (open ? 'rotate(180deg)' : '')};
`;

export const OptionsContainer = styled.div<{ open: boolean }>`
  position: absolute;
  top: ${props => props.theme.valueInPx.px50};
  left: ${props => props.theme.valueInPx.px0};
  width: ${props => props.theme.valueInPercent.pr100};
  z-index: 5;
  max-height: ${props => props.theme.valueInPx.px100};
  overflow-y: auto;
  color: ${props => props.theme.usedColors.black};
  background-color: ${props => props.theme.usedColors.white};
  border: 1px solid ${props => props.theme.usedColors.grayMoreOpacity};
  border-top: none;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 4px ${props => props.theme.usedColors.blackOpacity};
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;

  &::-webkit-scrollbar {
    width: ${props => props.theme.valueInPx.px5};
  }

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.usedColors.grayOpacity};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.usedColors.grayMoreOpacity};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme.usedColors.grayOpacity};
  }
`;

export const Option = styled.div`
  padding: ${props => props.theme.indentation.i10};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.usedColors.grayMoreOpacity};
  }
`;
