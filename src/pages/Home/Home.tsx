import { RightOutlined } from '@ant-design/icons'
import ProductCard from 'components/ProductCard'
import Slide from 'components/Slide'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import colors from 'constants/colors'
import { SeeAllLink } from 'globalStyle.styled'
import { SwiperSlide } from 'swiper/react'
import {
  BannerWrap,
  CategoryWrap,
  Container,
  HomeWrap,
  SideBannerWrap,
  BannerSlideWrap,
  CategoryItem,
  TopSearchWrap,
  HeaderSection,
  TopSearchCard,
  TopSearchCardImage,
  TopSearchCardNumber,
  TopSearchCardTitle,
  IconTop,
  ListProductWrap,
  Title,
  ListDiscoveryProduct,
  TopSearchCardImageWrap
} from './Home.styled'
import routePaths from 'constants/routePaths'
import Button from 'components/Button'
import useQueryConfig from 'hooks/useQueryConfig'
import productApis from 'apis/product.api'
import { getImageUrl, formatNumberToSocialStyle } from 'utils/utils'

const Home = () => {
  const navigate = useNavigate()
  const queryConfig = useQueryConfig()

  const { data: dataListCategory } = useQuery({
    queryKey: ['list-category', queryConfig],
    queryFn: () => productApis.fetchListCategory(),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000
  })
  const listCategory = dataListCategory?.data.data

  const { data: dataListBanner } = useQuery({
    queryKey: ['list-banner'],
    queryFn: () => productApis.fetchListBanner(),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000
  })
  const listBanner = dataListBanner?.data.data

  const { data: dataListTopSellProduct } = useQuery({
    queryKey: ['list-top-sell-products'],
    queryFn: () => productApis.fetchListTopSellProducts(),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000
  })
  const listTopSellProduct = dataListTopSellProduct?.data.data

  const { data: dataListProducts } = useQuery({
    queryKey: ['list-products', queryConfig],
    queryFn: () => productApis.fetchListProduct(),
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000
  })
  const listProducts = dataListProducts?.data.data.data

  return (
    <Container>
      <HomeWrap>
        <BannerWrap>
          <BannerSlideWrap>
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
              {listBanner &&
                listBanner.map((banner) => (
                  <SwiperSlide key={banner.id}>
                    <img src={getImageUrl(banner.image)} alt={banner.image} style={{ userSelect: 'none' }} />
                  </SwiperSlide>
                ))}
            </Slide>
          </BannerSlideWrap>
          <SideBannerWrap>
            <img src='https://cf.shopee.vn/file/da61368b47b7490bdb304f9780b174dd_xhdpi' alt='' />
            <img src='https://cf.shopee.vn/file/18a8dec3a146454b0e7fd1e03b75e198_xhdpi' alt='' />
          </SideBannerWrap>
        </BannerWrap>

        <CategoryWrap>
          <HeaderSection>
            <Title>DANH MỤC</Title>
          </HeaderSection>

          <Slide
            slidesPerView={2}
            breakpoints={{
              320: {
                slidesPerView: 3
              },
              567: {
                slidesPerView: 4
              },
              768: {
                slidesPerView: 8
              },
              1024: {
                slidesPerView: 10
              }
            }}
          >
            {listCategory &&
              listCategory.map((category) => (
                <SwiperSlide key={category.id}>
                  <Link to={`${routePaths.categoryProduct}/${category.id}`}>
                    <CategoryItem>
                      <img src={getImageUrl(category.image)} alt={category.name} />
                      <span>{category.name}</span>
                    </CategoryItem>
                  </Link>
                </SwiperSlide>
              ))}
          </Slide>
        </CategoryWrap>

        <TopSearchWrap>
          <HeaderSection>
            <Title bold={true} color={colors.orange}>
              Sản phẩm bán chạy
            </Title>
            <Link to={routePaths.topProducts}>
              <SeeAllLink>
                <span>Xem tất cả</span>
                <RightOutlined />
              </SeeAllLink>
            </Link>
          </HeaderSection>

          <Slide
            slidesPerView={2}
            spaceBetween={10}
            breakpoints={{
              320: {
                slidesPerView: 2
              },
              567: {
                slidesPerView: 3
              },
              768: {
                slidesPerView: 4
              },
              1024: {
                slidesPerView: 6
              }
            }}
          >
            {listTopSellProduct &&
              listTopSellProduct.map((topProduct) => (
                <SwiperSlide key={topProduct.id}>
                  <Link to={`${routePaths.detailsProduct}/${topProduct.id}`}>
                    <TopSearchCard>
                      <TopSearchCardImageWrap>
                        <TopSearchCardImage src={getImageUrl(topProduct.image)} alt={topProduct.name} />
                        <IconTop />
                        <TopSearchCardNumber>
                          Bán {formatNumberToSocialStyle(topProduct.numberSell)} + / tháng
                        </TopSearchCardNumber>
                      </TopSearchCardImageWrap>

                      <TopSearchCardTitle>{topProduct.name}</TopSearchCardTitle>
                    </TopSearchCard>
                  </Link>
                </SwiperSlide>
              ))}
          </Slide>
        </TopSearchWrap>

        <ListProductWrap>
          <HeaderSection>
            <Title bold={true} color={colors.orange}>
              Danh sách sản phẩm
            </Title>
          </HeaderSection>

          <ListDiscoveryProduct>
            {listProducts && listProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </ListDiscoveryProduct>

          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
            <Button style={{ maxWidth: '20rem', width: '100%' }} onClick={() => navigate(routePaths.allProducts)}>
              Xem Thêm
            </Button>
          </div>
        </ListProductWrap>
      </HomeWrap>
    </Container>
  )
}

export default Home
