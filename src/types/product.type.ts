export interface ProductListConfig {
  page?: string
  limit?: string
  order?: 'desc' | 'asc'
  sort_by?: 'createdAt' | 'view' | 'sold' | 'price'
  exclude?: string
  rating_filter?: number
  price_max?: string
  price_min?: string
  keyword?: string
  category?: string
}
