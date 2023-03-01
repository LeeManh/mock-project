import { InfoCircleOutlined } from '@ant-design/icons'
import { useQuery } from '@tanstack/react-query'

import Pagination from 'components/Pagination'
import ListProduct from './components/ListProduct'
import SideFilter from 'components/SideFilter'
import SortFilter from 'components/SortFilter'
import usePagination from 'hooks/usePagination'
import useQueryConfig from 'hooks/useQueryConfig'
import { Wrapper } from 'globalStyle.styled'
import { Container, ContentWrap, ProductSection, TitleSearchProduct } from './ResultSearchProductsPage.styled'
import productApis from 'apis/product.api'
import LoadingDots from 'components/LoadingDots/LoadingDots'

const ResultSearchProductsPage = () => {
  const queryConfig = useQueryConfig()

  const keyword = queryConfig?.keyword

  const { currentPage, onChangePage } = usePagination()

  const { data: dataListProducts, isLoading } = useQuery({
    queryKey: ['list-products', queryConfig],
    queryFn: () => productApis.fetchListProduct(queryConfig),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000
  })
  const listProducts = dataListProducts?.data.data.data
  const total = dataListProducts?.data.data.total || 1
  const pageSize = dataListProducts?.data.data.per_page || 1

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

            {isLoading ? (
              <LoadingDots />
            ) : (
              <>
                {listProducts && listProducts.length > 0 ? (
                  <ListProduct listProducts={listProducts} />
                ) : (
                  <div style={{ marginTop: '2rem', textAlign: 'center' }}>Không có sản phẩm phù hợp ... </div>
                )}

                <Pagination
                  hideOnSinglePage
                  pageSize={pageSize}
                  current={+currentPage}
                  onChange={(page) => onChangePage(page)}
                  total={total}
                  styleContainer={{ marginTop: '3rem' }}
                />
              </>
            )}
          </ProductSection>
        </ContentWrap>
      </Wrapper>
    </Container>
  )
}

export default ResultSearchProductsPage
