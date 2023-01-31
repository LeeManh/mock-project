import { InfoCircleOutlined } from '@ant-design/icons'

import Pagination from 'components/Pagination'
import ListProduct from './components/ListProduct'
import SideFilter from './components/SideFilter'
import SortFilter from './components/SortFilter'
import { Wrapper } from 'globalStyle.styled'
import { Container, ContentWrap, ProductSection, TitleSearchProduct } from './ResultSearchProductsPage.styled'
import useQueryParams from 'hooks/useQueryParams'
import usePagination from 'hooks/usePagination'

const ResultSearchProductsPage = () => {
  const queryParams = useQueryParams()

  const keyword = queryParams?.keyword

  const { currentPage, onChangePage } = usePagination()

  return (
    <Container as={'main'}>
      <Wrapper>
        <ContentWrap>
          <SideFilter />

          <ProductSection>
            <TitleSearchProduct>
              <InfoCircleOutlined />
              <div>
                Kết quả tìm kiếm cho từ khoá
                <span className='text-orange'> '{keyword}'</span>
              </div>
            </TitleSearchProduct>

            <SortFilter />

            <ListProduct />
            <Pagination
              hideOnSinglePage
              current={+currentPage}
              onChange={(page) => onChangePage(page)}
              total={50}
              styleContainer={{ marginTop: '3rem' }}
            />
          </ProductSection>
        </ContentWrap>
      </Wrapper>
    </Container>
  )
}

export default ResultSearchProductsPage
