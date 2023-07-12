import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  height: 7vh;
  z-index: 6;
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
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.light};
  font-size: ${props => props.theme.fontSizes.xxl};
  line-height: 30px;
  color: ${props => props.theme.colors.fontColor};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.usedColors.green};
  }

  &.active:after {
    transform: scaleX(1);
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.usedColors.green};
    bottom: 0;
    left: 0;
    transform-origin: left center;
    transition: transform 0.5s ease-in-out;
  }

  @media (max-width: 600px) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
  @media (max-width: 515px) {
    font-size: ${props => props.theme.fontSizes.l};
  }
  @media (max-width: 400px) {
    font-size: ${props => props.theme.fontSizes.sm};
  }
`;

export const LogoHeader = styled.img`
  width: 40px;
  height: 40px;
  background-size: contain;

  @media (max-width: 505px) {
    width: 30px;
    height: 30px;
  }
`;
