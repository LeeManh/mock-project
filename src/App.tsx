import useRouteElement from 'hooks/useRouteElement'
import { ToastContainer } from 'react-toastify'
import GlobalStyles from 'globalStyle.styled'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const elements = useRouteElement()

  return (
    <>
      {elements}
      <ToastContainer />
      <GlobalStyles />
    </>
  )
}

export default App
