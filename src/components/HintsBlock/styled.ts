import styled from 'styled-components';

export const HintsBlockContainer = styled.ul`
  position: absolute;
  top: 45px;
  width: 100%;
  max-height: 40vh;
  background-color: ${props => props.theme.colors.mainBackground};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.usedColors.grayMoreOpacity};
  box-shadow: 0 2px 4px ${props => props.theme.usedColors.blackOpacity};
  list-style: none;
  padding: 10px;
  margin: ${props => props.theme.indentation.i0};
  overflow-y: auto;
  z-index: 5;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.usedColors.grayMoreOpacity};
    border-radius: 5px;
  }

  @media (max-width: 602px) {
    width: 70%;
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
  width: 100%;
`;
