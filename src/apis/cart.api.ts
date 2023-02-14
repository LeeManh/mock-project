import http from 'utils/http'
import type { CartItem, ResponseAddToCart } from 'types/cart.type'
import type { SuccessResponse } from 'types/utils.type'
import type { DetailsProductSchema } from 'utils/rules'

export interface BodyAddToCart extends Partial<DetailsProductSchema> {
  id_product: number
}
export interface BodyUpdateCart {
  quantity: string
}

const addToCart = (body: BodyAddToCart) => http.post<ResponseAddToCart>('/add-to-cart', body)
const fetchListCart = () => http.get<SuccessResponse<CartItem[]>>('/list-cart')
const updateQuantity = (idItemCart: number, quantity: string) => http.patch(`/update-cart/${idItemCart}`, { quantity })
const deleteItemCart = (idItemCart: number) => http.delete(`/delete-cart/${idItemCart}`)
const deleteItemsCart = (idItemsCart: string) => http.post('delete-cart-multiple', { id_cart: idItemsCart })

const cartApis = {
  addToCart,
  fetchListCart,
  updateQuantity,
  deleteItemCart,
  deleteItemsCart
}

export default cartApis
