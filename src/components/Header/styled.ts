import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  height: 7vh;
  top: 0;
  box-shadow: 0 4px 6px ${props => props.theme.colors.boxShadow};
  background-color: ${props => props.theme.colors.headFootBackground};
`;
export const Wrapper = styled.div`
  width: 90vw;
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7vh;
  color: ${props => props.theme.colors.fontColor};
`;

export const NavLinkItem = styled(NavLink)`
  color: ${props => props.theme.colors.fontColor};
  text-decoration: none;

  &:hover {
    color: rgb(53, 185, 26);
  }

  &.active:after {
    transform: scaleX(1);
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: rgb(53, 185, 26);
    bottom: 0;
    left: 0;
    transform-origin: left center;
    transition: transform 0.5s ease-in-out;
  }
`;

export const LogoHeader = styled.img`
  background-size: contain;
`;
