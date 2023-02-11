import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { lazy } from 'react'

import routePaths from 'constants/routePaths'
import AuthLayout from 'layouts/AuthLayout'
import MainLayout from 'layouts/MainLayout'
import CartLayout from 'layouts/CartLayout'
import UserLayout from 'layouts/UserLayout'
import CheckOutLayout from 'layouts/CheckOutLayout'

import { useAppSelector } from './useApp'

const Login = lazy(() => import('pages/Login'))
const Register = lazy(() => import('pages/Register'))
const Home = lazy(() => import('pages/Home'))
const DetailsProduct = lazy(() => import('pages/DetailsProduct'))
const CategoryProducts = lazy(() => import('pages/CategoryProducts'))
const CartPage = lazy(() => import('pages/CartPage'))
const UserProfile = lazy(() => import('pages/User/UserProfile'))
const UserAddress = lazy(() => import('pages/User/UserAddress'))
const ChangePassword = lazy(() => import('pages/User/ChangePassword'))
const UserPurchase = lazy(() => import('pages/User/UserPurchase'))
const TopProducts = lazy(() => import('pages/TopProducts'))
const NotFound = lazy(() => import('pages/NotFound'))
const SimilarProductsPage = lazy(() => import('pages/SimilarProductsPage'))
const AllProductsPage = lazy(() => import('pages/AllProductsPage'))
const ResultSearchProductsPage = lazy(() => import('pages/ResultSearchProductsPage'))
const CheckOutPage = lazy(() => import('pages/CheckOutPage'))

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
      path: routePaths.allProducts,
      element: (
        <MainLayout>
          <AllProductsPage />
        </MainLayout>
      )
    },
    {
      path: routePaths.similarProducts,
      element: (
        <MainLayout>
          <SimilarProductsPage />
        </MainLayout>
      )
    },
    {
      path: routePaths.searchProduct,
      element: (
        <MainLayout>
          <ResultSearchProductsPage />
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
      path: routePaths.checkout,
      element: <ProtectedRoute />,
      children: [
        {
          index: true,
          element: (
            <CheckOutLayout>
              <CheckOutPage />
            </CheckOutLayout>
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
