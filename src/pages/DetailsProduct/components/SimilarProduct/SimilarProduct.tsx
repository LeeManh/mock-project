import ProductCard from 'components/ProductCard'
import { RightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { Header, ListSimilarProduct, SimilarProductsWrap, Title } from './SimilarProduct.styled'
import { SeeAllLink } from 'globalStyle.styled'
import routePaths from 'constants/routePaths'

const SimilarProduct = () => {
  return (
    <SimilarProductsWrap>
      <Header>
        <Title>Sản phẩm tương tự</Title>
        <SeeAllLink>
          <Link to={routePaths.similarProducts}>Xem tất cả</Link>
          <RightOutlined />
        </SeeAllLink>
      </Header>
      <ListSimilarProduct>
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <ProductCard key={index} />
          ))}
      </ListSimilarProduct>
    </SimilarProductsWrap>
  )
}

export default SimilarProduct
