import { InfoCircleOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'

import Pagination from 'components/Pagination'
import ListProduct from './components/ListProduct'
import SideFilter from './components/SideFilter'
import SortFilter from './components/SortFilter'
import usePagination from 'hooks/usePagination'
import useQueryConfig from 'hooks/useQueryConfig'
import { Wrapper } from 'globalStyle.styled'
import { Container, ContentWrap, ProductSection, TitleSearchProduct } from './ResultSearchProductsPage.styled'
import productApis from 'apis/product.api'

const ResultSearchProductsPage = () => {
  const queryConfig = useQueryConfig()

  const keyword = queryConfig?.keyword

  const { currentPage, onChangePage } = usePagination()

  const { data: dataListProducts } = useQuery({
    queryKey: ['list-products', queryConfig],
    queryFn: () => productApis.fetchListProduct(queryConfig),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000
  })
  const listProducts = dataListProducts?.data.data.data

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
            {listProducts && <ListProduct listProducts={listProducts} />}

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
