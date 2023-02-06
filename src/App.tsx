import useRouteElement from 'hooks/useRouteElement'
import { ToastContainer } from 'react-toastify'
import GlobalStyles from 'globalStyle.styled'
import 'react-toastify/dist/ReactToastify.css'
import ScrollToTop from 'components/ScrollToTop'

const App = () => {
  const elements = useRouteElement()

  return (
    <>
      {elements}
      <ScrollToTop />
      <ToastContainer />
      <GlobalStyles />
    </>
  )
}

export default App
