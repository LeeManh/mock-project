import Footer from 'components/Footer'
import HeaderCartLayout from 'layouts/CartLayout/HeaderCartLayout'
import HeaderMainLayoutMobile from 'layouts/MainLayout/HeaderMainLayoutMobile'
import React from 'react'

interface Props {
  children?: React.ReactNode
}

const CartLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderCartLayout />
      <HeaderMainLayoutMobile />

      {children}

      <Footer />
    </>
  )
}

export default CartLayout
