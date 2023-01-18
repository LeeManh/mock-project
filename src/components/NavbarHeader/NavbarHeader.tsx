import type { MenuProps } from 'antd'
import { Dropdown } from 'antd'
import { Link } from 'react-router-dom'
import images from 'assets/images'
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
  Wrap
} from './NavbarHeader.styled'
import routePaths from 'constants/routePaths'

const languages: MenuProps['items'] = [
  {
    key: 'vn',
    label: <div>Tiếng Việt</div>
  },
  {
    key: 'en',
    label: <div>English</div>
  }
]

const userMenu: MenuProps['items'] = [
  {
    key: 'profile',
    label: <Link to={`${routePaths.user}/${routePaths.userAccount}/${routePaths.userProfile}`}>Tài khoản của tôi</Link>
  },
  {
    key: 'purchase',
    label: <Link to={`${routePaths.user}/${routePaths.userPurChase}`}>Đơn mua</Link>
  },
  {
    key: 'logout',
    label: <Link to={`${routePaths.logout}`}>Đăng xuất</Link>
  }
]

const NavbarHeader = () => {
  return (
    <Container>
      <Wrap>
        <LeftNavbar>
          <NavbarItem>Tải ứng dụng</NavbarItem>
          <NavbarItem>
            <span>Kết nối</span>
            <ImageSocical src={images.icons.facebookSmallIcon} alt='facebookSmallIcon' />
            <ImageSocical src={images.icons.instagramSmallIcon} alt='instagramSmallIcon' />
          </NavbarItem>
        </LeftNavbar>

        <RightNavbar>
          <NavbarItem>
            <BellIcon />
            <span>Thông báo</span>
          </NavbarItem>

          <Dropdown
            menu={{
              items: languages,
              selectable: true,
              defaultSelectedKeys: ['vn'],
              style: {
                borderRadius: '2px'
              },
              className: 'custom-dropdown'
            }}
            placement='bottomRight'
            arrow
            overlayStyle={{
              minWidth: '20rem'
            }}
          >
            <NavbarItem>
              <GlobalIcon />
              <span>Tiếng Việt</span>
              <ArrowDownIcon />
            </NavbarItem>
          </Dropdown>

          <Dropdown
            menu={{
              items: userMenu,
              style: {
                borderRadius: '2px'
              },
              className: 'custom-dropdown'
            }}
            placement='bottomRight'
            arrow
            overlayStyle={{
              minWidth: '20rem'
            }}
          >
            <AvartarWrap>
              <AvartarImage src='https://cf.shopee.vn/file/2d7d51ffc7af8cdc00d086c882d5e020_tn' alt='avatar' />
              <NameUser>lemanh</NameUser>
            </AvartarWrap>
          </Dropdown>
        </RightNavbar>
      </Wrap>
    </Container>
  )
}

export default NavbarHeader
