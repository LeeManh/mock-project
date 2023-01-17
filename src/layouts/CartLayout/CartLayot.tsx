import Footer from 'components/Footer'
import HeaderCartLayout from 'layouts/CartLayout/HeaderCartLayout'
import React from 'react'

interface Props {
  children?: React.ReactNode
}

const CartLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderCartLayout />

      {children}

      <Footer />
    </>
  )
}

export default CartLayout
