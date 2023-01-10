import Footer from 'components/Footer'
import HeaderAuthLayout from 'components/HeaderAuthLayout'

const AuthLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <HeaderAuthLayout />

      {children}

      <Footer />
    </>
  )
}

export default AuthLayout
