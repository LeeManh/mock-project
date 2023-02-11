import { useQuery } from '@tanstack/react-query'
import keyBy from 'lodash/keyBy'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import cartApis from 'apis/cart.api'
import LoadingDots from 'components/LoadingDots/LoadingDots'
import { Wrapper } from 'globalStyle.styled'
import { Container } from './CartPage.styled'
import EmptyCart from './components/EmptyCart'
import Table from './components/Table'
import PaymentFooter from './components/PaymentFooter'
import type { ExtraCartItem } from 'types/cart.type'
import { useAppDispatch, useAppSelector } from 'hooks/useApp'
import { selectCart, setListCart } from 'features/cart/cartSlice'

const CartPage = () => {
  const dispatch = useAppDispatch()
  const { listCart: listCartRedux } = useAppSelector(selectCart)
  const { state } = useLocation()

  const { data: dataCart, isLoading: isLoadingDataCart } = useQuery({
    queryKey: ['list-cart'],
    queryFn: () => cartApis.fetchListCart()
  })
  const listCart = dataCart?.data.data

  useEffect(() => {
    if (!listCart) return

    const extraListCartKeyBy = keyBy(listCartRedux, 'id')

    const extraListCart: ExtraCartItem[] = listCart.map((item) => {
      const isChecked = item.id === state?.idItemCart || Boolean(extraListCartKeyBy[item.id]?.checked) || false

      return {
        ...item,
        checked: isChecked,
        disabled: false
      }
    })
    dispatch(setListCart(extraListCart))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, listCart, state?.idItemCart])

  useEffect(() => {
    return () => window.history.replaceState({}, document.title)
  }, [])

  if (isLoadingDataCart) return <LoadingDots />

  return (
    <Container>
      <Wrapper>
        {listCartRedux && listCartRedux.length > 0 ? (
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
