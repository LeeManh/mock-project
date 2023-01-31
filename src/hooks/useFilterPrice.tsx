import useQueryConfig from 'hooks/useQueryConfig'
import { useNavigate, createSearchParams, useLocation } from 'react-router-dom'
import omitBy from 'lodash/omitBy'
import isEmpty from 'lodash/isEmpty'
import omit from 'lodash/omit'

const useFilterPrice = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const queryConfig = useQueryConfig()

  const onSubmit = (data: Record<string, unknown>) => {
    const queryConfigOmitPrice = omit(queryConfig, ['price_max', 'price_min'])
    const priceFilter = omitBy({ ...data }, isEmpty)

    navigate({
      pathname,
      search: createSearchParams({
        ...(queryConfigOmitPrice as Record<string, string>),
        page: '1',
        ...(priceFilter as Record<string, string>)
      }).toString()
    })
  }

  return { onSubmit }
}

export default useFilterPrice
