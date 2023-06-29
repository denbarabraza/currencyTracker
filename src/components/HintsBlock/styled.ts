import styled from 'styled-components';

export const HintsBlockContainer = styled.ul`
  position: absolute;
  top: 45px;
  width: 100%;
  max-height: 40vh;
  background-color: ${props => props.theme.colors.mainBackground};
  border-radius: 5px;
  border: 1px solid rgb(204, 204, 204);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px;
  margin: 0;
  overflow-y: auto;
  z-index: 5;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(204, 204, 204);
    border-radius: 5px;
  }

  @media (max-width: 602px) {
    width: 70%;
    margin-top: 10px;
  }
`;

export const HintItem = styled.li`
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(53, 185, 26);
  }
`;

export const InfoItem = styled.div`
  color: ${props => props.theme.colors.fontColor};
  text-align: center;
  font-size: 16px;
  width: 100%;
`;
