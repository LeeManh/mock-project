import type { OrderStaus } from './order.type'
import type { SuccessResponse } from './utils.type'
export interface ProductListConfig {
  page?: string
  limit?: string
  order?: 'desc' | 'asc'
  sort_by?: 'ctime' | 'sales' | 'price'
  rating_filter?: number
  price_max?: string
  price_min?: string
  keyword?: string
  category?: string
  delivery_status?: OrderStaus
}

export interface Category {
  id: number
  name: string
  image: string
}

export interface Banner {
  id: number
  image: string
}

export interface Product {
  id: string
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
  price_promotion: number
}

export interface ProductDetails extends Product {
  description: string
  sizes?: string
  colors?: string
}

export type ListProductResponse = SuccessResponse<{
  current_page: number
  data: Product[]
  per_page: number
  total: number
}>
