import Footer from 'components/Footer'
import HeaderCartLayout from 'layouts/CartLayout/HeaderCartLayout'
import HeaderMainLayoutMobile from 'components/HeaderMobile'
import React from 'react'

interface Props {
  children?: React.ReactNode
}

const CartLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderCartLayout title='Giỏ hàng' />
      <HeaderMainLayoutMobile />

      {children}

      <Footer />
    </>
  )
}

export default CartLayout
