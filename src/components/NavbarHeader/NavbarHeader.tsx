import type { MenuProps } from 'antd'
import { Dropdown, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { useQueryClient } from '@tanstack/react-query'

import images from 'assets/images'
import {
  ArrowDownIcon,
  AvartarWrap,
  BellIcon,
  Container,
  GlobalIcon,
  ImageSocical,
  LeftNavbar,
  LoginAndRegisterWrap,
  NameUser,
  NavbarItem,
  RightNavbar,
  Wrap
} from './NavbarHeader.styled'
import routePaths from 'constants/routePaths'
import { useAppDispatch, useAppSelector } from 'hooks/useApp'
import { useMutation } from '@tanstack/react-query'
import authApis from 'apis/auth.api'
import { logoutSuccess, selectAuth } from 'features/auth/authSlice'
import { UserOutlined } from '@ant-design/icons'
import { getImageUrl } from 'utils/utils'

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
    label: <div>Đăng xuất</div>
  }
]

const NavbarHeader = () => {
  const { isAuthenticated, user } = useAppSelector(selectAuth)
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()

  const logoutMutation = useMutation({
    onSuccess: () => {
      dispatch(logoutSuccess())
      queryClient.removeQueries({ queryKey: ['list-cart'] })
    },
    mutationFn: () => authApis.logoutAccount()
  })

  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'logout') {
      logoutMutation.mutate()
    }
  }

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
          <NavbarItem border={false}>
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
            <NavbarItem border={false}>
              <GlobalIcon />
              <span>Tiếng Việt</span>
              <ArrowDownIcon />
            </NavbarItem>
          </Dropdown>
          {isAuthenticated ? (
            <Dropdown
              menu={{
                items: userMenu,
                style: {
                  borderRadius: '2px'
                },
                className: 'custom-dropdown',
                onClick
              }}
              placement='bottomRight'
              arrow
              overlayStyle={{
                minWidth: '20rem'
              }}
            >
              <AvartarWrap>
                <Avatar
                  src={user?.avatar ? getImageUrl(user.avatar) : null}
                  alt='avatar'
                  size={22}
                  icon={<UserOutlined />}
                />
                <NameUser>{user?.name || user?.email}</NameUser>
              </AvartarWrap>
            </Dropdown>
          ) : (
            <NavbarItem border={false}>
              <LoginAndRegisterWrap>
                <Link to={routePaths.register} style={{ paddingRight: '1rem', borderRight: `1px solid #ffffff38` }}>
                  Đăng ký
                </Link>
                <Link to={routePaths.login} style={{ paddingLeft: '1rem' }}>
                  Đăng nhập
                </Link>
              </LoginAndRegisterWrap>
            </NavbarItem>
          )}
        </RightNavbar>
      </Wrap>
    </Container>
  )
}

export default NavbarHeader
