import styled from 'styled-components';

export const ButtonBlock = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ButtonItem = styled.button`
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  padding: 8px;

  font-size: 16px;
  color: rgb(0, 0, 0);

  background: rgb(53, 185, 26);
  border: none;
  border-radius: 30px;
  box-shadow: 0 4px 18px rgba(71, 75, 87, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);

  &:disabled {
    opacity: 0.5;

    &:hover {
      transform: none;
    }

    &:active {
      transform: none;
    }
  }

  &:hover {
    transform: translateY(2px);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(-1px);
  }
`;
