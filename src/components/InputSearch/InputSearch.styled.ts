import styled from "styled-components";

import { ReactComponent as SearchIconSvg } from "assets/svgs/search-icon.svg";
import colors from "constants/colors";

export const Container = styled.form`
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 2px;
  overflow: hidden;
  height: 4rem;
  max-width: 84rem;
  width: 100%;
  padding-right: 3px;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 9%);
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  height: 100%;
  padding: 0 1.5rem;
`;
export const ButtonSearch = styled.button`
  border: none;
  outline: none;
  min-width: 6rem;
  max-width: 19rem;
  height: 3.4rem;
  background-color: ${colors["orange-light"]};
  border-radius: 2px;
  cursor: pointer;
`;
export const SearchIcon = styled(SearchIconSvg)`
  fill: white;
  width: 1.4rem;
  height: 1.4rem;
`;
