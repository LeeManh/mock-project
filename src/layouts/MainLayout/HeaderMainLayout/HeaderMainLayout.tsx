import { Link } from 'react-router-dom'
import { Dropdown, MenuProps } from 'antd'
import styled from 'styled-components'

import colors from 'constants/colors'
import NavbarHeader from 'components/NavbarHeader'
import routePaths from 'constants/routePaths'
import InputSearch from 'components/InputSearch'
import images from 'assets/images'
import { ReactComponent as LogoShopee } from 'assets/svgs/logo-shopee.svg'
import { CartIcon, Container, HeaderMain, HeaderMainWrap, ShoppingCartIconWrap } from './HeaderMainLayout.styled'
import useSearchProduct from 'hooks/useSearchProduct'

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
  const { keyword, onChange, onSearch } = useSearchProduct()

  return (
    <Container>
      <NavbarHeader />
      <HeaderMain>
        <HeaderMainWrap>
          <Link to={routePaths.home} style={{ display: 'flex' }}>
            <LogoShopee fill={colors.white} style={{ cursor: 'pointer', height: '5rem' }} />
          </Link>

          <InputSearch
            placeholder='Tìm sản phẩm, thương hiệu, và tên shop'
            value={keyword}
            onChange={onChange}
            onSearch={onSearch}
          />

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
              <Link to={routePaths.cart}>
                <CartIcon />
              </Link>
            </Dropdown>
          </ShoppingCartIconWrap>
        </HeaderMainWrap>
      </HeaderMain>
    </Container>
  )
}

export default HeaderMainLayout
