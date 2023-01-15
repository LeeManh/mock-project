import Footer from 'components/Footer'
import HeaderMainLayout from 'components/HeaderMainLayout'
import { Outlet } from 'react-router-dom'

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <HeaderMainLayout />
      {children}
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
