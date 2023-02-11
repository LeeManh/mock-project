import Footer from 'components/Footer'
import HeaderMobile from 'components/HeaderMobile'
import HeaderCartLayout from 'layouts/CartLayout/HeaderCartLayout'

import React from 'react'

interface Props {
  children?: React.ReactNode
}

const CheckOutLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderCartLayout title='Thanh toán' showSearch={false} />
      <HeaderMobile />

      {children}

      <Footer />
    </>
  )
}

export default CheckOutLayout
