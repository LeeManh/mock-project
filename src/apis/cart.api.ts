import http from 'utils/http'
import type { DetailsProductSchema } from 'utils/rules'

export interface BodyAddToCart extends DetailsProductSchema {
  idProduct: string
}

const addToCart = (body: BodyAddToCart) => http.post('/add-to-cart', body)

const cartApis = {
  addToCart
}

export default cartApis
