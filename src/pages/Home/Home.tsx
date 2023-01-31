import { RightOutlined } from '@ant-design/icons'
import ProductCard from 'components/ProductCard'
import Slide from 'components/Slide'
import { Link, useNavigate } from 'react-router-dom'

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

const bannerSlides = [
  'https://cf.shopee.vn/file/9031ab5deae3facba7bb137c836ccf50_xxhdpi',
  'https://cf.shopee.vn/file/1b910a37375d247916e134dd355e999b_xxhdpi',
  'https://cf.shopee.vn/file/b09eeca58f62162731919abd9b63fa6e_xxhdpi',
  'https://cf.shopee.vn/file/5cc11712240720cef64eea6a0ebb4f34_xxhdpi',
  'https://cf.shopee.vn/file/b32705afea6ba1230cb860c660dc3cf6_xxhdpi'
]

const Home = () => {
  const navigate = useNavigate()

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
              {bannerSlides.map((img, index) => (
                <SwiperSlide key={index}>
                  <img src={img} alt='banner' style={{ cursor: 'pointer' }} />
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
            {Array.from({ length: 12 }, (_, index) => (
              <SwiperSlide key={index}>
                <Link to={`${routePaths.categoryProduct}/1`}>
                  <CategoryItem>
                    <img src='https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn' alt='Thời trang nam' />
                    <span>Thời trang nam</span>
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
            {Array.from({ length: 10 }, (_, index) => (
              <SwiperSlide key={index}>
                <Link to={`${routePaths.detailsProduct}/1`}>
                  <TopSearchCard key={index}>
                    <TopSearchCardImageWrap>
                      <TopSearchCardImage src='https://cf.shopee.vn/file/dd8927f74c9d92fe678f57cb5b4bc000' alt='' />
                      <IconTop />
                      <TopSearchCardNumber>Bán 30k+ / tháng </TopSearchCardNumber>
                    </TopSearchCardImageWrap>

                    <TopSearchCardTitle>Áo khoác nam</TopSearchCardTitle>
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
            {Array.from({ length: 12 }, (_, index) => (
              <ProductCard key={index} />
            ))}
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
