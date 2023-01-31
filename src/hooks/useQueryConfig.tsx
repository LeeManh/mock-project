import { isUndefined, omitBy } from 'lodash'

import type { ProductListConfig } from 'types/product.type'
import useQueryParams from './useQueryParams'

const useQueryConfig = () => {
  const queryParams: ProductListConfig = useQueryParams()
  const queryConfig: ProductListConfig = omitBy(
    {
      page: queryParams.page,
      limit: queryParams.limit,
      order: queryParams.order,
      sort_by: queryParams.sort_by,
      exclude: queryParams.exclude,
      rating_filter: queryParams.rating_filter,
      price_min: queryParams.price_min,
      price_max: queryParams.price_max,
      keyword: queryParams.keyword,
      category: queryParams.category
    },
    isUndefined
  )

  return queryConfig
}

export default useQueryConfig
