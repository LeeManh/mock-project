import Footer from 'components/Footer'
import HeaderMainLayout from 'layouts/MainLayout/HeaderMainLayout'
import React from 'react'

interface Props {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderMainLayout />

      {children}

      <Footer />
    </>
  )
}

export default MainLayout
