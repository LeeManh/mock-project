import { Link } from 'react-router-dom'
import { Dropdown } from 'antd'
import { useQuery } from '@tanstack/react-query'

import colors from 'constants/colors'
import NavbarHeader from 'components/NavbarHeader'
import routePaths from 'constants/routePaths'
import InputSearch from 'components/InputSearch'
import { ReactComponent as LogoShopee } from 'assets/svgs/logo-shopee.svg'
import { CartIcon, Container, HeaderMain, HeaderMainWrap, ShoppingCartIconWrap } from './HeaderMainLayout.styled'
import useSearchProduct from 'hooks/useSearchProduct'
import DropDownCart from '../DropDownCart'
import ItemDropDownCart from '../ItemDropDownCart'
import cartApis from 'apis/cart.api'
import { useAppSelector } from 'hooks/useApp'
import { selectAuth } from 'features/auth/authSlice'
import EmptyCart from '../EmptyCart'
import CustomBadge from 'components/CustomBadge'

const NUMBER_MAX_ITEM_SHOW = 5

const HeaderMainLayout = () => {
  const { isAuthenticated } = useAppSelector(selectAuth)
  const { keyword, onChange, onSearch } = useSearchProduct()

  const { data: dataListCart } = useQuery({
    queryKey: ['list-cart'],
    queryFn: () => cartApis.fetchListCart(),
    enabled: isAuthenticated
  })
  const listCart = dataListCart?.data.data

  const cartItems =
    listCart && listCart.length > 0
      ? listCart.slice(0, 5).map((item) => ({ key: item.id, label: <ItemDropDownCart item={item} /> }))
      : [
          {
            key: 'cart-empty',
            label: <EmptyCart />
          }
        ]
  const numberItemLeft =
    (listCart && listCart.length > NUMBER_MAX_ITEM_SHOW && listCart.length - NUMBER_MAX_ITEM_SHOW) || 0

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
                items: cartItems,
                selectable: true,
                defaultSelectedKeys: ['vn']
              }}
              dropdownRender={(menu) => {
                return <DropDownCart menu={menu} numberItemLeft={numberItemLeft} />
              }}
              placement='bottomRight'
              arrow
            >
              <CustomBadge count={listCart?.length || 0} overflowCount={99} offset={[2, 0]}>
                <Link to={routePaths.cart}>
                  <CartIcon />
                </Link>
              </CustomBadge>
            </Dropdown>
          </ShoppingCartIconWrap>
        </HeaderMainWrap>
      </HeaderMain>
    </Container>
  )
}

export default HeaderMainLayout
