import ProductCard from 'components/ProductCard'
import { RightOutlined } from '@ant-design/icons'
import { createSearchParams, Link } from 'react-router-dom'

import { Header, ListSimilarProduct, SimilarProductsWrap, Title } from './SimilarProduct.styled'
import { SeeAllLink } from 'globalStyle.styled'
import routePaths from 'constants/routePaths'
import type { Product } from 'types/product.type'

interface Props {
  similarProducts?: Product[]
  categoryId: number
}

const SimilarProduct = ({ similarProducts, categoryId }: Props) => {
  return (
    <SimilarProductsWrap>
      <Header>
        <Title>Sản phẩm tương tự</Title>
        <SeeAllLink>
          <Link
            to={{
              pathname: routePaths.similarProducts,
              search: createSearchParams({
                category: String(categoryId)
              }).toString()
            }}
          >
            Xem tất cả
          </Link>
          <RightOutlined />
        </SeeAllLink>
      </Header>
      <ListSimilarProduct>
        {similarProducts && similarProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </ListSimilarProduct>
    </SimilarProductsWrap>
  )
}

export default SimilarProduct
