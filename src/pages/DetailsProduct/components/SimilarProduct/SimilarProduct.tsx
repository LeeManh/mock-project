import ProductCard from 'components/ProductCard'
import { RightOutlined } from '@ant-design/icons'

import { Header, ListSimilarProduct, SimilarProductsWrap, Title } from './SimilarProduct.styled'
import { SeeAllLink } from 'globalStyle.styled'

const SimilarProduct = () => {
  return (
    <SimilarProductsWrap>
      <Header>
        <Title>Sản phẩm tương tự</Title>
        <SeeAllLink>
          <span>Xem tất cả</span>
          <RightOutlined />
        </SeeAllLink>
      </Header>
      <ListSimilarProduct>
        {Array(10)
          .fill(null)
          .map((_, index) => (
            <ProductCard key={index} />
          ))}
      </ListSimilarProduct>
    </SimilarProductsWrap>
  )
}

export default SimilarProduct
