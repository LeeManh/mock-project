import { Wrapper } from 'globalStyle.styled'
import Pagination from 'components/Pagination'
import ProductCard from 'components/ProductCard'
import usePagination from 'hooks/usePagination'
import { Container, LineThrough, ListProducts, Title, TitleWrap } from './AllProductsPage.styled'

const AllProductsPage = () => {
  const { currentPage, onChangePage } = usePagination()

  return (
    <Container>
      <Wrapper>
        <TitleWrap>
          <Title>Tất cả sản phẩm</Title>
          <LineThrough />
        </TitleWrap>
        <ListProducts>
          {Array(18)
            .fill(null)
            .map((_, index) => (
              <ProductCard key={index} />
            ))}
        </ListProducts>
        <Pagination
          hideOnSinglePage
          current={+currentPage}
          onChange={(page) => onChangePage(page)}
          total={50}
          styleContainer={{ marginTop: '3rem' }}
        />
      </Wrapper>
    </Container>
  )
}

export default AllProductsPage
