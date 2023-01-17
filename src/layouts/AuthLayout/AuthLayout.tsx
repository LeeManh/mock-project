import Footer from 'components/Footer'
import HeaderAuthLayout from 'layouts/AuthLayout/HeaderAuthLayout'

interface Props {
  children?: React.ReactNode
}
const AuthLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderAuthLayout />

      {children}

      <Footer />
    </>
  )
}

export default AuthLayout
