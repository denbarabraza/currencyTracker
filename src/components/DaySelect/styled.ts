import styled from 'styled-components';

export const DaySelectContainer = styled.div`
  position: relative;
  width: 200px;
  font-family: ${props => props.theme.fonts[0]};
`;

export const DaySelectedOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${props => props.theme.indentation.i10};
  border: 1px solid ${props => props.theme.usedColors.grayMoreOpacity};
  border-radius: 5px;
  cursor: pointer;
  height: 25px;
`;

export const DayArrowIcon = styled.div<{ open: boolean }>`
  width: 0;
  height: 0;
  border-top: 5px solid ${props => props.theme.colors.fontColor};
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  transition: transform 0.2s ease-in-out;

  transform: ${({ open }) => (open ? 'rotate(180deg)' : '')};
`;

export const DayOptionsContainer = styled.div<{ open: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 5;
  max-height: 100px;
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
    width: 5px;
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

export const DayOption = styled.div`
  padding: ${props => props.theme.indentation.i10};
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.usedColors.grayMoreOpacity};
  }
`;
