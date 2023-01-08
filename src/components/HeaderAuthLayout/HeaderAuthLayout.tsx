import styled from "styled-components";
import { useMatch, Link } from "react-router-dom";

import { ReactComponent as LogoShopee } from "assets/images/logo-shopee.svg";
import colors from "constants/colors";
import { Wrapper } from "globalStyle.styled";
import routePaths from "constants/routePaths";

const Container = styled.div`
  background-color: ${colors.white};
`;
const Header = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 8.4rem;
`;
const HeaderTitle = styled.div`
  font-size: 2.4rem;
`;
const LeftHeader = styled.div`
  display: flex;
  align-items: end;
  gap: 2rem;
`;
const RightHeader = styled.div`
  color: ${colors.orange};
  cursor: pointer;
`;

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
