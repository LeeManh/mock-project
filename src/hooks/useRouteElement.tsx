import { useRoutes } from 'react-router-dom'

import routePaths from 'constants/routePaths'
import Login from 'pages/Login'
import AuthLayout from 'layouts/AuthLayout'
import Register from 'pages/Register'
import MainLayout from 'layouts/MainLayout'
import Home from 'pages/Home'
import DetailsProduct from 'pages/DetailsProduct'

const useRouteElement = () => {
  const elements = useRoutes([
    {
      path: routePaths.home,
      element: <MainLayout />,
      children: [
        {
          path: routePaths.home,
          element: <Home />
        },
        {
          path: routePaths.detailsProduct,
          element: <DetailsProduct />
        }
      ]
    },
    {
      path: routePaths.login,
      element: (
        <AuthLayout>
          <Login />
        </AuthLayout>
      )
    },
    {
      path: routePaths.register,
      element: (
        <AuthLayout>
          <Register />
        </AuthLayout>
      )
    }
  ])

  return elements
}

export default useRouteElement
