import { useQuery } from '@tanstack/react-query'

import cartApis from 'apis/cart.api'
import LoadingDots from 'components/LoadingDots/LoadingDots'
import { Wrapper } from 'globalStyle.styled'
import { Container } from './CartPage.styled'
import EmptyCart from './components/EmptyCart'
import Table from './components/Table'
import PaymentFooter from './components/PaymentFooter'
import type { ExtraCartItem } from 'types/cart.type'
import { useAppDispatch } from 'hooks/useApp'
import { setListCart } from 'features/cart/cartSlice'

const CartPage = () => {
  const dispatch = useAppDispatch()

  const { data: dataCart, isLoading: isLoadingDataCart } = useQuery({
    queryKey: ['list-cart'],
    queryFn: () => cartApis.fetchListCart()
  })
  const listCart = dataCart?.data.data || []

  if (isLoadingDataCart) return <LoadingDots />

  const extraListCart: ExtraCartItem[] = listCart
    ? listCart.map((item) => ({ ...item, checked: false, disabled: false }))
    : []

  dispatch(setListCart(extraListCart))

  return (
    <Container>
      <Wrapper>
        {extraListCart && extraListCart.length > 0 ? (
          <>
            <Table />
            <PaymentFooter />
          </>
        ) : (
          <EmptyCart />
        )}
      </Wrapper>
    </Container>
  )
}

export default CartPage
