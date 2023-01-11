import { Link } from 'react-router-dom'
import { Dropdown, MenuProps } from 'antd'
import styled from 'styled-components'

import { ReactComponent as LogoShopee } from 'assets/svgs/logo-shopee.svg'
import NavbarHeader from 'components/NavbarHeader'
import colors from 'constants/colors'
import routePaths from 'constants/routePaths'
import InputSearch from 'components/InputSearch'

import { CartIcon, Container, HeaderMain, HeaderMainWrap, ShoppingCartIconWrap } from './HeaderMainLayout.styled'
import images from 'assets/images'

const ContainerCartEmpty = styled.div`
  min-height: 26rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  img {
    width: 10rem;
    height: 10rem;
  }
`

const EmptyCart = () => {
  return (
    <ContainerCartEmpty>
      <img src={images.cart.cartEmpty} alt='cartEmpty' />
      <div>Chưa có sản phẩm</div>
    </ContainerCartEmpty>
  )
}

const cartMenuEmpty: MenuProps['items'] = [
  {
    key: 'cart-1',
    label: <EmptyCart />
  }
]

const HeaderMainLayout = () => {
  return (
    <Container>
      <NavbarHeader />
      <HeaderMain>
        <HeaderMainWrap>
          <Link to={routePaths.home} style={{ display: 'flex' }}>
            <LogoShopee fill={colors.white} style={{ cursor: 'pointer', height: '5rem' }} />
          </Link>

          <InputSearch />

          <ShoppingCartIconWrap>
            <Dropdown
              menu={{
                items: cartMenuEmpty,
                selectable: true,
                defaultSelectedKeys: ['vn'],
                style: {
                  borderRadius: '2px'
                }
              }}
              placement='bottomRight'
              arrow
              overlayStyle={{
                minWidth: '40rem'
              }}
            >
              <CartIcon />
            </Dropdown>
          </ShoppingCartIconWrap>
        </HeaderMainWrap>
      </HeaderMain>
    </Container>
  )
}

export default HeaderMainLayout
