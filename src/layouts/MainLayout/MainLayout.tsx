import React from 'react'

import Footer from 'components/Footer'
import HeaderMainLayout from 'layouts/MainLayout/HeaderMainLayout'
import HeaderMainLayoutMobile from './HeaderMainLayoutMobile'

interface Props {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderMainLayout />
      <HeaderMainLayoutMobile />

      {children}

      <Footer />
    </>
  )
}

export default MainLayout
