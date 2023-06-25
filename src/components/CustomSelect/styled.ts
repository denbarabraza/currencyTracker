import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 200px;
  font-family: sans-serif;
`;

export const SelectedOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  cursor: pointer;
  height: 25px;
`;

export const ArrowIcon = styled.div`
  width: 0;
  height: 0;
  border-top: 5px solid rgb(0, 0, 0);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  transition: transform 0.2s ease-in-out;

  &.open {
    transform: rotate(180deg);
  }
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(204, 204, 204);
  border-top: none;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgb(242, 242, 242);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(204, 204, 204);
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgb(153, 153, 153);
  }
`;

export const Option = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgb(240, 240, 240);
  }
`;
