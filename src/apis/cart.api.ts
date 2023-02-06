import http from 'utils/http'
import type { DetailsProductSchema } from 'utils/rules'

export interface BodyAddToCart extends DetailsProductSchema {
  idProduct: number
}
export interface BodyUpdateCart {
  idProduct: number
  quantity: string
}

const addToCart = (body: BodyAddToCart) => http.post('/add-to-cart', body)
const fetchCart = () => http.get('/cart')
const updateItemCart = (body: BodyUpdateCart) => http.patch('/update-cart', body)
const deleteItemCart = (idProduct: number) => http.delete(`/delete-cart/${idProduct}`)

const cartApis = {
  addToCart,
  fetchCart,
  updateItemCart,
  deleteItemCart
}

export default cartApis
