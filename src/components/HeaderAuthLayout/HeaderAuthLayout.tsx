import { useMatch, Link } from "react-router-dom";

import { ReactComponent as LogoShopee } from "assets/svgs/logo-shopee.svg";
import colors from "constants/colors";
import routePaths from "constants/routePaths";
import {
  Container,
  Header,
  HeaderTitle,
  LeftHeader,
  RightHeader,
} from "./HeaderAuthLayout.styled";

const HeaderAuthLayout = () => {
  const isLoginPage = useMatch(routePaths.login);

  return (
    <Container>
      <Header as="header">
        <LeftHeader>
          <Link to={routePaths.home} style={{ display: "flex" }}>
            <LogoShopee
              fill={colors.orange}
              style={{ cursor: "pointer", height: "4.2rem" }}
            />
          </Link>

          <HeaderTitle> {isLoginPage ? "Đăng nhập" : "Đăng ký"}</HeaderTitle>
        </LeftHeader>
        <RightHeader>Bạn cần giúp đỡ?</RightHeader>
      </Header>
    </Container>
  );
};

export default HeaderAuthLayout;
