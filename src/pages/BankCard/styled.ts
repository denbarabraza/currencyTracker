import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.indentation.i40};
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${props => props.theme.indentation.i20};
  overflow: hidden;
`;
