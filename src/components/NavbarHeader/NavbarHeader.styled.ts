import styled, { css } from "styled-components";

import { Wrapper } from "globalStyle.styled";
import { ReactComponent as BellIconSvg } from "assets/svgs/bell-icon.svg";
import { ReactComponent as GlobalIconSvg } from "assets/svgs/global-icon.svg";
import { ReactComponent as ArrowDownIconSvg } from "assets/svgs/arrow-down-icon.svg";

import colors from "constants/colors";

export const Container = styled.nav`
  height: 3.4rem;
  font-size: 1.3rem;
  color: ${colors.white};
`;
export const Wrap = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LeftNavbar = styled.div`
  display: flex;
  align-items: center;
`;

export const RightNavbar = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  border-left: 1px solid #ffffff38;
  padding: 0 10px;

  &:first-child {
    padding-left: 0;
    border-left: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`;

export const ImageSocical = styled.img`
  filter: brightness(0) invert(1);
  cursor: pointer;
`;
export const IconStyles = css`
  width: 1.6rem;
  height: 1.6rem;
  fill: white;
`;
export const BellIcon = styled(BellIconSvg)`
  ${IconStyles}
`;

export const GlobalIcon = styled(GlobalIconSvg)`
  width: 1.6rem;
  height: 1.6rem;
`;
export const ArrowDownIcon = styled(ArrowDownIconSvg)`
  width: 1.2rem;
  height: 1.2rem;
  fill: white;
`;

export const AvartarWrap = styled(NavbarItem)``;
export const AvartarImage = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  flex-shrink: 0;
  object-fit: cover;
`;
export const NameUser = styled.div`
  max-width: 5.3rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;
