import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  height: ${props => props.theme.valueInVh.vh7};
  z-index: 6;
  top: ${props => props.theme.valueInPx.px0};
  box-shadow: 0 4px 6px ${props => props.theme.colors.boxShadow};
  background-color: ${props => props.theme.colors.headFootBackground};
`;
export const Wrapper = styled.div`
  width: ${props => props.theme.valueInVw.vw90};
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.theme.valueInPercent.pr100};
  height: ${props => props.theme.valueInVh.vh7};
  color: ${props => props.theme.colors.fontColor};
`;

export const NavLinkItem = styled(NavLink)`
  font-style: normal;
  font-weight: ${props => props.theme.fontWeight.light};
  font-size: ${props => props.theme.fontSizes.xxl};
  line-height: ${props => props.theme.valueInPx.px30};
  color: ${props => props.theme.colors.fontColor};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.usedColors.green};
  }

  &.active:after {
    transform: scaleX(1);
    content: '';
    display: block;
    width: ${props => props.theme.valueInPercent.pr100};
    height: ${props => props.theme.valueInPx.px2};
    background-color: ${props => props.theme.usedColors.green};
    bottom: ${props => props.theme.valueInPx.px0};
    left: ${props => props.theme.valueInPx.px0};
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
  width: ${props => props.theme.valueInPx.px40};
  height: ${props => props.theme.valueInPx.px40};
  background-size: contain;

  @media (max-width: 505px) {
    width: ${props => props.theme.valueInPx.px30};
    height: ${props => props.theme.valueInPx.px30};
  }
`;
