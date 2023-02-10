import orderStaus from 'constants/orderStatus'
import type { ProductDetails } from './product.type'
import type { User } from './user.type'

export type OrderStaus = (typeof orderStaus)[keyof typeof orderStaus]

export interface ItemProductOrder {
  id: number
  order_id: number
  product_id: number
  quantity: number
  money: number
  color: null
  size: null
  product: ProductDetails
}

export interface ItemOrder {
  id: number
  code: null
  name: string
  phone: string
  address: string
  email: null
  user_id: number
  total_money: number
  delivery_status: OrderStaus
  user: User
  product_order: ItemProductOrder[]
}
