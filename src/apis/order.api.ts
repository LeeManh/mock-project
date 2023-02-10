import { ItemOrder } from '../types/order.type'
import http from 'utils/http'
import type { SuccessResponse } from '../types/utils.type'
import type { OrderStaus } from 'types/order.type'

type DeliveryStatus = OrderStaus

export interface BodyAddOrder {
  id_cart: string
  total_money: number
  name: string
  phone: string
  address: string
}
export interface ParamsGetListOrder {
  delivery_status: DeliveryStatus
}

const addOrder = (body: BodyAddOrder) => http.post('add-order', body)
const getListOrder = (params: ParamsGetListOrder) => http.get<SuccessResponse<ItemOrder[]>>('list-order', { params })
const cancelOrder = (id: number) => http.delete(`cancel-order/${id}`)
const buyOrderAgain = (id: number) => http.post(`buy-again/${id}`)

const orderApis = {
  addOrder,
  getListOrder,
  cancelOrder,
  buyOrderAgain
}

export default orderApis
