import { ReactComponent as LogoShopee } from "assets/images/logo-shopee.svg";
import styled from "styled-components";
import colors from "constants/colors";
import { Wrapper } from "globalStyle.styled";

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
  return (
    <Container>
      <Header as="header">
        <LeftHeader>
          <LogoShopee
            fill={colors.orange}
            style={{ cursor: "pointer", height: "4.2rem" }}
          />
          <HeaderTitle>Đăng nhập</HeaderTitle>
        </LeftHeader>
        <RightHeader>Bạn cần giúp đỡ?</RightHeader>
      </Header>
    </Container>
  );
};

export default HeaderAuthLayout;
