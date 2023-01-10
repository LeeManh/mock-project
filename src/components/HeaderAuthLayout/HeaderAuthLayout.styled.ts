import styled from "styled-components";

import { Wrapper } from "globalStyle.styled";
import colors from "constants/colors";

export const Container = styled.div`
  background-color: ${colors.white};
`;
export const Header = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8.4rem;
`;
export const HeaderTitle = styled.div`
  font-size: 2.4rem;
`;
export const LeftHeader = styled.div`
  display: flex;
  align-items: end;
  gap: 2rem;
`;
export const RightHeader = styled.div`
  color: ${colors.orange};
  cursor: pointer;
`;
