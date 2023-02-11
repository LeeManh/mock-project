import { Wrapper } from 'globalStyle.styled'
import Pagination from 'components/Pagination'
import ProductCard from 'components/ProductCard'
import usePagination from 'hooks/usePagination'
import { Container, LineThrough, ListProducts, Title, TitleWrap } from './AllProductsPage.styled'
import { useQuery } from '@tanstack/react-query'
import productApis from 'apis/product.api'
import useQueryConfig from 'hooks/useQueryConfig'

const AllProductsPage = () => {
  const { currentPage, onChangePage } = usePagination()
  const queryConfig = useQueryConfig()

  const { data: dataListProducts } = useQuery({
    queryKey: ['list-products', queryConfig],
    queryFn: () => productApis.fetchListProduct(queryConfig),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000
  })
  const listProducts = dataListProducts?.data.data.data
  const total = dataListProducts?.data.data.total || 1
  const pageSize = dataListProducts?.data.data.per_page || 1

  return (
    <Container>
      <Wrapper>
        <TitleWrap>
          <Title>Tất cả sản phẩm</Title>
          <LineThrough />
        </TitleWrap>
        <ListProducts>
          {listProducts && listProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </ListProducts>
        <Pagination
          hideOnSinglePage
          pageSize={pageSize}
          current={+currentPage}
          onChange={(page) => onChangePage(page)}
          total={total}
          styleContainer={{ marginTop: '3rem' }}
        />
      </Wrapper>
    </Container>
  )
}

export default AllProductsPage
