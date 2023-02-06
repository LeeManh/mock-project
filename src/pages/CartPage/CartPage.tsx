import { useQuery } from '@tanstack/react-query'

import cartApis from 'apis/cart.api'
import LoadingDots from 'components/LoadingDots/LoadingDots'
import { Wrapper } from 'globalStyle.styled'
import { Container } from './CartPage.styled'
import EmptyCart from './components/EmptyCart'
import { useState } from 'react'
import Table from './components/Table'
import PaymentFooter from './components/PaymentFooter'

const CartPage = () => {
  // call api to fetch items in cart user
  // const { data: dataCart, isLoading: isLoadingDataCart } = useQuery({
  //   queryKey: ['items-cart'],
  //   queryFn: () => cartApis.fetchCart()
  // })
  // const itemsCart = dataCart?.data.data

  // if (isLoadingDataCart) return <LoadingDots />

  const itemsCart: any[] = [1, 2, 3, 4, 5]

  return (
    <Container>
      <Wrapper>
        {itemsCart && (itemsCart as any[]).length > 0 ? (
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
