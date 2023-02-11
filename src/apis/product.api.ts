import type { SuccessResponse } from 'types/utils.type'
import type {
  Category,
  Banner,
  ListProductResponse,
  ProductListConfig,
  ProductDetails,
  Product
} from 'types/product.type'
import http from 'utils/http'

const fetchListCategory = () => http.get<SuccessResponse<Category[]>>('list-category')
const fetchTopProducts = () => http.get('list-sell-product')
const fetchListBanner = () => http.get<SuccessResponse<Banner[]>>('list-banner')
const fetchListTopSellProducts = () => http.get<SuccessResponse<Product[]>>('list-sell-product')
const fetchListProduct = (params: ProductListConfig = {}) => http.get<ListProductResponse>('list-product', { params })

const fetchDetailsProduct = (idProduct: string) =>
  http.get<SuccessResponse<{ data: ProductDetails } & { category: Category }>>(`detail-product/${idProduct}`)

const productApis = {
  fetchListCategory,
  fetchTopProducts,
  fetchListBanner,
  fetchListTopSellProducts,
  fetchListProduct,
  fetchDetailsProduct
}

export default productApis
