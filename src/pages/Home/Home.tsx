import { RightOutlined } from '@ant-design/icons'
import images from 'assets/images'
import ProductCard from 'components/ProductCard'
import Slide from 'components/Slide'
import SlideImage from 'components/SlideImage'
import colors from 'constants/colors'
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
  SeeAllLink,
  ListProductWrap,
  Title,
  ListDiscoveryProduct,
  PaginationWrap,
  PaginationCustom,
  TopSearchCardImageWrap
} from './Home.styled'

const bannerSlides = [
  {
    label: images.banner.slide1,
    alt: ''
  },
  {
    label: images.banner.slide3,
    alt: ''
  },
  {
    label: images.banner.slide4,
    alt: ''
  }
]

const Home = () => {
  return (
    <Container>
      <HomeWrap>
        <BannerWrap>
          <BannerSlideWrap>
            <SlideImage datas={bannerSlides} />
          </BannerSlideWrap>
          <SideBannerWrap>
            <img src={images.banner.sideBanner} alt='' />
            <img src={images.banner.sideBanner} alt='' />
          </SideBannerWrap>
        </BannerWrap>

        <CategoryWrap>
          <HeaderSection>
            <Title>DANH MỤC</Title>
          </HeaderSection>

          <Slide slidesPerView={10} slidesPerGroup={10}>
            {Array.from({ length: 12 }, (_, index) => (
              <SwiperSlide key={index}>
                <CategoryItem>
                  <img src='https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn' alt='Thời trang nam' />
                  <span>Thời trang nam</span>
                </CategoryItem>
              </SwiperSlide>
            ))}
          </Slide>
        </CategoryWrap>

        <TopSearchWrap>
          <HeaderSection>
            <Title bold={true} color={colors.orange}>
              Sản phẩm bán chạy
            </Title>
            <SeeAllLink>
              <span>Xem tất cả</span>
              <RightOutlined />
            </SeeAllLink>
          </HeaderSection>

          <Slide slidesPerView={6}>
            {Array.from({ length: 10 }, (_, index) => (
              <SwiperSlide key={index}>
                <TopSearchCard key={index}>
                  <TopSearchCardImageWrap>
                    <TopSearchCardImage src='https://cf.shopee.vn/file/dd8927f74c9d92fe678f57cb5b4bc000' alt='' />
                    <IconTop />
                    <TopSearchCardNumber>Bán 30k+ / tháng </TopSearchCardNumber>
                  </TopSearchCardImageWrap>

                  <TopSearchCardTitle>Áo khoác nam</TopSearchCardTitle>
                </TopSearchCard>
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
            {Array.from({ length: 18 }, (_, index) => (
              <ProductCard key={index}></ProductCard>
            ))}
          </ListDiscoveryProduct>

          <PaginationWrap>
            <PaginationCustom hideOnSinglePage defaultCurrent={1} total={50} />
          </PaginationWrap>
        </ListProductWrap>
      </HomeWrap>
    </Container>
  )
}

export default Home
