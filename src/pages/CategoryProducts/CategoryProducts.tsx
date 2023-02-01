import { useParams } from 'react-router-dom'

import { SwiperSlide } from 'swiper/react'
import Pagination from 'components/Pagination'
import Slide from 'components/Slide'
import ListProduct from './components/ListProduct'
import SideFilter from './components/SideFilter'
import SortFilter from './components/SortFilter'
import usePagination from 'hooks/usePagination'
import { Wrapper } from 'globalStyle.styled'
import { Container, ContentWrap, ProductSection } from './CategoryProducts.styled'
import { useQuery } from '@tanstack/react-query'
import productApis from 'apis/product.api'

const bannerSlides = [
  'https://cf.shopee.vn/file/24f87e50d38a91df4753548878390b8b',
  'https://cf.shopee.vn/file/1070ce77e685357f30c628b2de177b1e',
  'https://cf.shopee.vn/file/90484c57639c0894c1c6396e9a023190',
  'https://cf.shopee.vn/file/856d76a2fb06e2fbf00a82d2e37151d9',
  'https://cf.shopee.vn/file/1d1414b492751cd579e397daeccd1de6'
]

const CategoryProducts = () => {
  const { currentPage, onChangePage } = usePagination()
  const { idCategory } = useParams()

  const { data: dataListProducts } = useQuery({
    queryKey: ['list-products-by-category', idCategory],
    queryFn: () => productApis.fetchListProduct({ category: idCategory }),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000
  })
  const listProducts = dataListProducts?.data.data.data

  return (
    <Container as={'main'}>
      <Wrapper>
        <Slide
          navigation={true}
          pagination={{
            clickable: true
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
        >
          {bannerSlides.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt='banner' style={{ cursor: 'pointer' }} />
            </SwiperSlide>
          ))}
        </Slide>

        <ContentWrap>
          <SideFilter />

          <ProductSection>
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

export default CategoryProducts
