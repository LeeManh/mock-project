import { Link } from "react-router-dom";

import { ReactComponent as LogoShopee } from "assets/svgs/logo-shopee.svg";
import NavbarHeader from "components/NavbarHeader";
import colors from "constants/colors";
import routePaths from "constants/routePaths";
import InputSearch from "components/InputSearch";

import {
  CartIcon,
  Container,
  HeaderMain,
  HeaderMainWrap,
  ShoppingCartIconWrap,
} from "./HeaderMainLayout.styled";

const HeaderMainLayout = () => {
  return (
    <Container>
      <NavbarHeader />
      <HeaderMain>
        <HeaderMainWrap>
          <Link to={routePaths.home} style={{ display: "flex" }}>
            <LogoShopee
              fill={colors.white}
              style={{ cursor: "pointer", height: "5rem" }}
            />
          </Link>

          <InputSearch />

          <ShoppingCartIconWrap>
            <CartIcon />
          </ShoppingCartIconWrap>
        </HeaderMainWrap>
      </HeaderMain>
    </Container>
  );
};

export default HeaderMainLayout;
