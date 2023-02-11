import React from 'react'

import Footer from 'components/Footer'
import HeaderMainLayout from 'layouts/MainLayout/HeaderMainLayout'
import HeaderMobile from 'components/HeaderMobile'

interface Props {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderMainLayout />
      <HeaderMobile />

      {children}

      <Footer />
    </>
  )
}

export default MainLayout
