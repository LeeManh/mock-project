import { SuccessResponse } from './utils.type'
export interface ProductListConfig {
  page?: string
  limit?: string
  order?: 'desc' | 'asc'
  sort_by?: 'ctime' | 'sales' | 'price'
  exclude?: string
  rating_filter?: number
  price_max?: string
  price_min?: string
  keyword?: string
  category?: string
}

export interface Category {
  id: number
  name: string
  image: string
}

export interface TopProduct {
  id: number
  name: string
  image: string
  numberSell: number
}

export interface Banner {
  id: number
  image: string
}

export interface Product {
  id: number
  name: string
  image: string
  category_id: number
  quantity: number
  price: number
  isFreeShip: 0 | 1
  numberSell: number
  rating: number
  is_sale: 0 | 1
  percent_sale: number
}

export type ListProductResponse = SuccessResponse<{
  current_page: number
  data: Product[]
  per_page: number
  total: number
}>
