import { useNavigate, useLocation, createSearchParams } from 'react-router-dom'
import useQueryConfig from 'hooks/useQueryConfig'

const usePagination = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const queryConfig = useQueryConfig()
  const currentPage = queryConfig.page || 1

  const onChangePage = (page: number) => {
    navigate({
      pathname: pathname,
      search: createSearchParams({
        ...(queryConfig as Record<string, string>),
        page: String(page)
      }).toString()
    })
  }

  return { currentPage, onChangePage }
}

export default usePagination
