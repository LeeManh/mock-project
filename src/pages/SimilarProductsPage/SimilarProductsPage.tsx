import { useQuery } from '@tanstack/react-query'

import Pagination from 'components/Pagination'
import ProductCard from 'components/ProductCard'
import { Wrapper } from 'globalStyle.styled'
import { Container, LineThrough, ListProducts, Title, TitleWrap } from './SimilarProductsPage.styled'
import productApis from 'apis/product.api'
import LoadingDots from 'components/LoadingDots/LoadingDots'
import useQueryConfig from 'hooks/useQueryConfig'
import usePagination from 'hooks/usePagination'

const SimilarProductsPage = () => {
  const queryConfig = useQueryConfig()

  const { data: dataSimilarProducts, isLoading: isLoadingSimilarProducts } = useQuery({
    queryKey: ['similar-product', queryConfig],
    queryFn: () => productApis.fetchListProduct(queryConfig),
    keepPreviousData: true
  })
  const { currentPage, onChangePage } = usePagination()

  if (isLoadingSimilarProducts) return <LoadingDots />

  if (!dataSimilarProducts) return <div>Không có sản phẩm </div>

  const { data: similarProducts, total, per_page: pageSize } = dataSimilarProducts.data.data

  return (
    <Container>
      <Wrapper>
        <TitleWrap>
          <Title>Sản phẩm tương tự</Title>
          <LineThrough />
        </TitleWrap>
        <ListProducts>
          {similarProducts && similarProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </ListProducts>
        <Pagination
          hideOnSinglePage
          pageSize={pageSize}
          onChange={onChangePage}
          current={+currentPage}
          total={total}
          styleContainer={{ marginTop: '3rem' }}
        />
      </Wrapper>
    </Container>
  )
}

export default SimilarProductsPage
