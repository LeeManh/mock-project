import { Navigate, Outlet, useRoutes } from 'react-router-dom'

import routePaths from 'constants/routePaths'
import Login from 'pages/Login'
import AuthLayout from 'layouts/AuthLayout'
import Register from 'pages/Register'
import MainLayout from 'layouts/MainLayout'
import Home from 'pages/Home'
import DetailsProduct from 'pages/DetailsProduct'
import CategoryProducts from 'pages/CategoryProducts'
import CartLayout from 'layouts/CartLayout'
import CartPage from 'pages/CartPage'
import UserLayout from 'layouts/UserLayout'
import UserProfile from 'pages/User/UserProfile'
import UserAddress from 'pages/User/UserAddress'
import ChangePassword from 'pages/User/ChangePassword'
import UserPurchase from 'pages/User/UserPurchase'
import TopProducts from 'pages/TopProducts'
import { useAppSelector } from './useApp'
import NotFound from 'pages/NotFound'

const ProtectedRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}
const RejectedRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}

const useRouteElement = () => {
  const elements = useRoutes([
    {
      path: routePaths.home,
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      )
    },
    {
      path: routePaths.topProducts,
      element: (
        <MainLayout>
          <TopProducts />
        </MainLayout>
      )
    },
    {
      path: `${routePaths.detailsProduct}/:idProduct`,
      element: (
        <MainLayout>
          <DetailsProduct />
        </MainLayout>
      )
    },
    {
      path: `${routePaths.categoryProduct}/:idCategory`,
      element: (
        <MainLayout>
          <CategoryProducts />
        </MainLayout>
      )
    },
    {
      path: routePaths.cart,
      element: <ProtectedRoute />,
      children: [
        {
          index: true,
          element: (
            <CartLayout>
              <CartPage />
            </CartLayout>
          )
        }
      ]
    },
    {
      path: routePaths.user,
      element: <ProtectedRoute />,
      children: [
        {
          path: routePaths.userAccount,
          element: (
            <MainLayout>
              <UserLayout></UserLayout>
            </MainLayout>
          ),
          children: [
            {
              path: routePaths.userProfile,
              element: <UserProfile />
            },
            {
              path: routePaths.userAddress,
              element: <UserAddress />
            },
            {
              path: routePaths.changePasword,
              element: <ChangePassword />
            }
          ]
        },
        {
          path: routePaths.userPurChase,
          element: (
            <MainLayout>
              <UserLayout>
                <UserPurchase />
              </UserLayout>
            </MainLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <RejectedRoute />,
      children: [
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
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return elements
}

export default useRouteElement
