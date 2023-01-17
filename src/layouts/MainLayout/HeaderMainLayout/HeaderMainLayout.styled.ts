import styled from 'styled-components'

import { Wrapper } from 'globalStyle.styled'
import { ReactComponent as CartIconSvg } from 'assets/svgs/cart-icon.svg'

export const Container = styled.header`
  background: linear-gradient(-180deg, #f53d2d, #f63);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`
export const HeaderMain = styled.div`
  height: 8.5rem;
`

export const HeaderMainWrap = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
`

export const ShoppingCartIconWrap = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

export const CartIcon = styled(CartIconSvg)`
  width: 2.6rem;
  height: 2.6rem;
  color: white;
  cursor: pointer;
`
