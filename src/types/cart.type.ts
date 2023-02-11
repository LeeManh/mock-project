import type { Product } from './product.type'

export interface CartItem {
  id: number
  quantity: number
  status: number
  color?: string
  size?: string
  id_product: number
  user_id: number
  product: Product
}

export interface ExtraCartItem extends CartItem {
  checked: boolean
  disabled: boolean
}

export interface ResponseAddToCart {
  name: string
  quantity: string
  price: string
  percent_sale: string
  image: string
  id: number
}
