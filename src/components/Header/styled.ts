import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  height: 7vh;
  top: 0;
`;
export const Wrapper = styled.div`
  width: 90vw;
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid red;
  width: 100%;
  height: 7vh;
  color: #ffffff;
`;

export const LogoHeader = styled.img`
  background-size: contain;
`;
