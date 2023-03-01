import useRouteElement from 'hooks/useRouteElement'
import { ToastContainer } from 'react-toastify'
import GlobalStyles from 'globalStyle.styled'
import 'react-toastify/dist/ReactToastify.css'
import ScrollToTop from 'components/ScrollToTop'
import { Suspense } from 'react'
import LoadingDots from 'components/LoadingDots/LoadingDots'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { useAppSelector } from 'hooks/useApp'
import { selectLanguage } from 'features/language/language.slice'

const resources = {
  en: {
    translation: {
      categoryTitle: 'Category',
      topProductTitle: 'Best - selling product',
      listProductTitle: 'List of products',
      downloadTheApp: 'Download the app',
      connect: 'Connect',
      notification: 'Notification',
      login: 'Log in',
      register: 'Register',
      seeAll: 'See all',
      seeMore: 'See More'
    }
  },
  vn: {
    translation: {
      categoryTitle: 'Danh mục',
      topProductTitle: 'Sản phẩm bán chạy',
      listProductTitle: 'Danh sách sản phẩm',
      downloadTheApp: 'Tải ứng dụng',
      connect: 'Kết nối',
      notification: 'Thông báo',
      login: 'Đăng nhập',
      register: 'Đăng ký',
      seeAll: 'Xem tất cả',
      seeMore: 'Xem thêm'
    }
  }
}

const App = () => {
  const elements = useRouteElement()
  const language = useAppSelector(selectLanguage)

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: language,
      fallbackLng: 'en',

      interpolation: {
        escapeValue: false
      }
    })

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
