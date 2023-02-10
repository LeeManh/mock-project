import Footer from 'components/Footer'
import HeaderCartLayout from 'layouts/CartLayout/HeaderCartLayout'

import React from 'react'

interface Props {
  children?: React.ReactNode
}

const CheckOutLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderCartLayout title='Thanh toán' showSearch={false} />

      {children}

      <Footer />
    </>
  )
}

export default CheckOutLayout
