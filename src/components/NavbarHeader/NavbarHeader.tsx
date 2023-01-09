import images from "assets/images";
import {
  ArrowDownIcon,
  AvartarImage,
  AvartarWrap,
  BellIcon,
  Container,
  GlobalIcon,
  ImageSocical,
  LeftNavbar,
  NameUser,
  NavbarItem,
  RightNavbar,
  Wrap,
} from "./NavbarHeader.styled";
import Popover from "components/Popover";

const NavbarHeader = () => {
  return (
    <Container>
      <Wrap>
        <LeftNavbar>
          <NavbarItem>Tải ứng dụng</NavbarItem>
          <NavbarItem>
            <span>Kết nối</span>
            <ImageSocical
              src={images.icons.facebookSmallIcon}
              alt="facebookSmallIcon"
            />
            <ImageSocical
              src={images.icons.instagramSmallIcon}
              alt="instagramSmallIcon"
            />
          </NavbarItem>
        </LeftNavbar>

        <RightNavbar>
          <NavbarItem>
            <BellIcon />
            <span>Thông báo</span>
          </NavbarItem>

          <NavbarItem>
            <GlobalIcon />
            <span>Tiếng Việt</span>
            <ArrowDownIcon />
          </NavbarItem>

          <AvartarWrap>
            <AvartarImage
              src="https://cf.shopee.vn/file/2d7d51ffc7af8cdc00d086c882d5e020_tn"
              alt="avatar"
            />
            <NameUser>lemanh</NameUser>
          </AvartarWrap>
        </RightNavbar>
      </Wrap>
    </Container>
  );
};

export default NavbarHeader;
