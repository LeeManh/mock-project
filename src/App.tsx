import useRouteElement from 'hooks/useRouteElement'
import { ToastContainer } from 'react-toastify'
import GlobalStyles from 'globalStyle.styled'
import 'react-toastify/dist/ReactToastify.css'
import ScrollToTop from 'components/ScrollToTop'
import { Suspense } from 'react'
import LoadingDots from 'components/LoadingDots/LoadingDots'

const App = () => {
  const elements = useRouteElement()

  return (
    <Suspense fallback={<LoadingDots />}>
      {elements}
      <ScrollToTop />
      <ToastContainer />
      <GlobalStyles />
    </Suspense>
  )
}

export default App
